import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import courses from "./data/courses";
import ChapterView from "./components/ChapterView";
import logo from "./assets/ChatGPT Image Sep 19, 2026, 06_56_56 PM.png";

const STORAGE_KEY = "teachmesql-progress";

function App() {
  const course = courses?.[0];
  const sections = course?.sections ?? [];
  // localStorage.setItem(STORAGE_KEY, {});
  // Stable reference — course data is static.
  const stableSections = useMemo(() => sections, [course]);

  const firstSection = stableSections[0];
  console.log(firstSection);

  const firstChapter = firstSection?.chapters?.[0];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      /* ignore */
    }
    return {
      currentSectionId: firstSection?.id ?? null,
      currentChapterId: firstChapter?.id ?? null,
      currentContentIndex: 0,
      completed: { chapters: [] },
    };
  });

  const [selectedSectionId, setSelectedSectionId] = useState(
    () => progress.currentSectionId ?? firstSection?.id ?? null,
  );

  const [selectedChapterId, setSelectedChapterId] = useState(
    () => progress.currentChapterId ?? firstChapter?.id ?? null,
  );

  const mainContentRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* storage full / disabled */
    }
  }, [progress]);

  const selectedSection = useMemo(
    () => stableSections.find((s) => s.id === selectedSectionId),
    [stableSections, selectedSectionId],
  );

  const selectedChapter = useMemo(
    () => selectedSection?.chapters?.find((c) => c.id === selectedChapterId),
    [selectedSection, selectedChapterId],
  );

  const currentChapterLocation = useMemo(() => {
    for (let si = 0; si < stableSections.length; si++) {
      const ci =
        stableSections[si].chapters?.findIndex(
          (c) => c.id === selectedChapterId,
        ) ?? -1;
      if (ci !== -1) return { sectionIndex: si, chapterIndex: ci };
    }
    return { sectionIndex: -1, chapterIndex: -1 };
  }, [stableSections, selectedChapterId]);

  const nextChapterInfo = useMemo(() => {
    const { sectionIndex, chapterIndex } = currentChapterLocation;
    if (sectionIndex === -1 || chapterIndex === -1) return null;

    const currentSection = stableSections[sectionIndex];
    const nextInSection = currentSection?.chapters?.[chapterIndex + 1];
    if (nextInSection) {
      return {
        chapter: nextInSection,
        section: currentSection,
        sectionIndex,
        chapterIndex: chapterIndex + 1,
      };
    }

    for (let ni = sectionIndex + 1; ni < stableSections.length; ni++) {
      const first = stableSections[ni]?.chapters?.[0];
      if (first) {
        return {
          chapter: first,
          section: stableSections[ni],
          sectionIndex: ni,
          chapterIndex: 0,
        };
      }
    }
    return null;
  }, [stableSections, currentChapterLocation]);

  const nextChapter = nextChapterInfo?.chapter ?? null;

  const scrollToChapterTop = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }, []);

  const handleSectionSelect = useCallback(
    (sectionId) => {
      const section = stableSections.find((s) => s.id === sectionId);
      if (!section) return;
      const first = section.chapters?.[0];
      setSelectedSectionId(section.id);
      setSelectedChapterId(first?.id ?? null);
      setIsSidebarOpen(false);
      scrollToChapterTop();
    },
    [stableSections, scrollToChapterTop],
  );

  const handleChapterSelect = useCallback(
    (chapterId) => {
      if (!chapterId) return;
      const found = stableSections.find((s) =>
        s.chapters?.some((c) => c.id === chapterId),
      );
      if (!found) return;
      setSelectedSectionId(found.id);
      setSelectedChapterId(chapterId);
      setIsSidebarOpen(false);
      scrollToChapterTop();
    },
    [stableSections, scrollToChapterTop],
  );

  const handleNextChapter = useCallback(() => {
    if (!nextChapterInfo?.chapter) return;
    setSelectedSectionId(nextChapterInfo.section.id);
    setSelectedChapterId(nextChapterInfo.chapter.id);
    setIsSidebarOpen(false);
    scrollToChapterTop();
  }, [nextChapterInfo, scrollToChapterTop]);

  const handleCloseSidebar = useCallback(() => setIsSidebarOpen(false), []);

  // Escape closes sidebar
  useEffect(() => {
    if (!isSidebarOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsSidebarOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isSidebarOpen]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const allChapters = useMemo(
    () =>
      stableSections.flatMap((s) =>
        (s.chapters ?? []).map((c) => ({ ...c, sectionId: s.id })),
      ),
    [stableSections],
  );

  const completedChapters = progress.completed?.chapters ?? [];

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">
            Course unavailable
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            No course data is currently available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="TeachMeSQL"
            className="h-40 w-auto max-w-[170px] object-contain sm:h-11"
          />
        </div>

        <button
          type="button"
          onClick={() => setIsSidebarOpen((v) => !v)}
          aria-label="Open course menu"
          aria-expanded={isSidebarOpen}
          className="mr-5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 lg:hidden">
          <span className="text-xl leading-none">
            {isSidebarOpen ? "✕" : "☰"}
          </span>
        </button>
      </header>

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close course menu"
          onClick={handleCloseSidebar}
          className="fixed inset-0 z-40 cursor-default bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`fixed bottom-0 right-0 top-16 z-50 w-72 overflow-y-auto border-r border-slate-200 bg-white transition-transform duration-200 ease-out lg:z-40 lg:w-70 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Course navigation">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Course
            </h2>
          </div>

          <nav className="relative space-y-4">
            <div className="absolute bottom-[16px] top-0 ml-[2px] border-l border-slate-500 bg-slate-600" />

            {stableSections.map((section) => {
              const isSectionActive = section.id === selectedSectionId;
              return (
                <div key={section.id}>
                  <button
                    type="button"
                    onClick={() => handleSectionSelect(section.id)}
                    aria-expanded={isSectionActive}
                    className={`relative z-400 w-full px-3 py-2 text-left text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-slate-300 ${
                      isSectionActive
                        ? "border-l-[5px] border-slate-700 bg-slate-100 font-medium text-slate-900"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}>
                    {section.title}
                  </button>

                  {isSectionActive && (
                    <div className="mt-1 space-y-1 pl-[20px]">
                      {section.chapters?.map((chapter) => {
                        const isChapterActive =
                          chapter.id === selectedChapterId;

                        const chapterIndex = allChapters.findIndex(
                          (item) => item.id === chapter.id,
                        );
                        const previousChapter =
                          chapterIndex > 0
                            ? allChapters[chapterIndex - 1]
                            : null;

                        const isCurrent =
                          chapter.id === progress.currentChapterId;

                        const isUnlocked =
                          !previousChapter ||
                          completedChapters.includes(previousChapter.id) ||
                          isCurrent;

                        return (
                          <button
                            key={chapter.id}
                            type="button"
                            onClick={() => handleChapterSelect(chapter.id)}
                            aria-current={isChapterActive ? "page" : undefined}
                            disabled={!isUnlocked}
                            className={`relative z-[100] my-[4px] h-[40px] w-full border-l-[4px] border-slate-100 px-3 py-2 text-left text-sm transition focus:outline-none focus:ring-slate-300 ${
                              !isUnlocked
                                ? "cursor-not-allowed text-slate-300"
                                : isChapterActive
                                  ? "border-slate-500 bg-slate-100 font-medium text-slate-900"
                                  : "bg-slate-100 text-slate-600 hover:bg-slate-50"
                            }`}>
                            <span
                              className="absolute bottom-[19px] left-[-22px] h-[60px] w-[18.5px] border-b border-l border-slate-500"
                              style={{ borderRadius: "0px 10px 0" }}
                            />
                            {chapter.title}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      <main
        ref={mainContentRef}
        className="min-h-screen w-full overflow-x-hidden px-3 pb-20 pt-24 sm:px-4 lg:mr-70 lg:w-[calc(100%-16rem)] lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <ChapterView
            key={selectedChapter?.id ?? "no-chapter"}
            chapter={selectedChapter}
            sectionId={selectedSectionId}
            onNextChapter={handleNextChapter}
            nextChapter={nextChapter}
            progress={progress}
            setProgress={setProgress}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
