import { useCallback, useEffect, useRef, useState } from "react";
import ContentRenderer from "./ContentRenderer";

function ChapterView({
  chapter,
  sectionId,
  onNextChapter,
  nextChapter,
  progress,
  setProgress,
}) {
  const contents = chapter?.contents ?? [];
  const chapterId = chapter?.id;
  const contentCount = contents.length;

  const [visibleCount, setVisibleCount] = useState(() => {
    if (!chapter) return 0;
    const completedChapters = progress?.completed?.chapters ?? [];
    if (completedChapters.includes(chapter.id)) return contentCount;
    if (
      progress?.currentChapterId === chapter.id &&
      Number.isInteger(progress?.currentContentIndex)
    ) {
      return Math.min(progress.currentContentIndex + 1, contentCount);
    }
    return contentCount > 0 ? 1 : 0;
  });

  const [completedBlocks, setCompletedBlocks] = useState({});
  const [quizAction, setQuizAction] = useState(null);
  const latestContentRef = useRef(null);
  const quizRef = useRef(null);

  // ✅ Reset internal state on chapter change (defensive — key already does this)
  useEffect(() => {
    setCompletedBlocks({});
    setQuizAction(null);
    document?.querySelector("body")?.scrollTo({ top: 0, behavior: "smooth" });
  }, [chapterId]);

  // Auto-scroll to newest block when more than 1 visible
  useEffect(() => {
    if (visibleCount <= 1) return;
    const id = requestAnimationFrame(() => {
      latestContentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [visibleCount]);

  const currentBlock = contents[visibleCount - 1];

  const isCurrentBlockCompleted =
    currentBlock?.type === "practice" || currentBlock?.type === "quiz"
      ? completedBlocks[currentBlock.id] === true
      : true;

  const canContinue = visibleCount < contentCount && isCurrentBlockCompleted;

  const handleBlockComplete = useCallback((blockId) => {
    if (!blockId) return;
    setCompletedBlocks((prev) =>
      prev[blockId] ? prev : { ...prev, [blockId]: true },
    );
    setQuizAction(null);
  }, []);

  const markChapterComplete = useCallback(() => {
    if (!chapterId) return;
    setProgress((prev) => {
      const chapters = prev.completed?.chapters ?? [];
      if (chapters.includes(chapterId)) return prev;
      return {
        ...prev,
        completed: { ...prev.completed, chapters: [...chapters, chapterId] },
      };
    });
  }, [chapterId, setProgress]);

  // ✅ Single source of truth for advancing
  const advance = useCallback(() => {
    setVisibleCount((prev) => {
      if (prev >= contentCount) return prev;
      const nextIndex = prev;
      // Persist after we know the new index
      setProgress((p) => ({
        ...p,
        currentSectionId: sectionId ?? p.currentSectionId,
        currentChapterId: chapterId ?? p.currentChapterId,
        currentContentIndex: nextIndex,
      }));
      return Math.min(prev + 1, contentCount);
    });
    setQuizAction(null);
  }, [contentCount, sectionId, chapterId, setProgress]);

  const handleContinue = useCallback(() => {
    if (!canContinue) return;
    advance();
  }, [canContinue, advance]);

  const handleQuizComplete = useCallback(() => {
    if (!currentBlock?.id) return;
    handleBlockComplete(currentBlock.id);

    if (visibleCount < contentCount) {
      advance();
      return;
    }
    markChapterComplete();
    if (nextChapter) onNextChapter?.();
  }, [
    currentBlock?.id,
    visibleCount,
    contentCount,
    nextChapter,
    handleBlockComplete,
    markChapterComplete,
    onNextChapter,
    advance,
  ]);

  const handleQuizAction = useCallback(() => {
    quizRef.current?.action?.();
  }, []);

  // Keyboard: Space
  useEffect(() => {
    const handleSpace = (e) => {
      if (e.code !== "Space") return;
      const tag = e.target?.tagName;
      if (tag === "TEXTAREA" || tag === "SELECT" || e.target?.isContentEditable)
        return;
      if (tag === "BUTTON" || tag === "A") return;

      e.preventDefault();

      if (currentBlock?.type === "quiz") {
        handleQuizAction();
        return;
      }
      if (visibleCount < contentCount) {
        if (canContinue) handleContinue();
        return;
      }
      if (nextChapter) {
        markChapterComplete();
        onNextChapter?.();
      }
    };

    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [
    currentBlock?.type,
    visibleCount,
    contentCount,
    canContinue,
    nextChapter,
    handleContinue,
    handleQuizAction,
    markChapterComplete,
    onNextChapter,
  ]);

  if (!chapter) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Select a chapter to start learning.
        </p>
      </div>
    );
  }

  const btnClass = `w-full rounded-[40px] bg-slate-900 px-20 py-2.5 text-sm font-semibold text-white transition duration-150 hover:bg-slate-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto`;

  return (
    <div>
      <h4 className="text-xl font-bold tracking-tight sm:text-3xl">
        {chapter.title}
      </h4>

      {contents.slice(0, visibleCount).map((block, index, arr) => {
        const isLatest = index === arr.length - 1;
        return (
          <section
            key={block.id}
            ref={isLatest ? latestContentRef : null}
            className="scroll-mt-20 sm:py-2">
            <ContentRenderer
              contents={[block]}
              quizRef={quizRef}
              onQuizStateChange={setQuizAction}
              onQuizPass={handleQuizComplete}
              onPracticeComplete={() => handleBlockComplete(block.id)}
            />
          </section>
        );
      })}

      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:right-70"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="mx-auto flex w-full max-w-4xl justify-end">
          <div className="mr-3 w-12">
            <button
              type="button"
              onClick={() =>
                document
                  ?.querySelector("body")
                  ?.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="h-11 w-11 rounded-full bg-slate-900 text-xl text-white shadow-sm transition hover:bg-slate-700 active:scale-95"
              aria-label="Scroll to top">
              ↑
            </button>
          </div>

          {currentBlock?.type === "quiz" ? (
            <button
              type="button"
              onClick={handleQuizAction}
              disabled={quizAction?.disabled ?? true}
              className={btnClass}>
              {quizAction?.label ?? "Submit"}
            </button>
          ) : visibleCount < contentCount ? (
            <button
              type="button"
              onClick={handleContinue}
              disabled={!canContinue}
              className={btnClass}
              style={{ background: "#26cf31" }}>
              Continue →
            </button>
          ) : nextChapter ? (
            <button
              type="button"
              onClick={() => {
                markChapterComplete();
                onNextChapter?.();
              }}
              className={btnClass}>
              Next Chapter →
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ChapterView;
