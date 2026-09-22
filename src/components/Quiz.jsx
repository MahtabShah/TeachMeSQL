import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import CodeBlock from "./CodeBlock";

const POPUP_DURATION_MS = 5000;

const Quiz = forwardRef(function Quiz({ quizzes, onPass, onStateChange }, ref) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [progressPct, setProgressPct] = useState(0);

  const validQuizzes = useMemo(
    () =>
      Array.isArray(quizzes)
        ? quizzes.filter(
            (q) => q && Array.isArray(q.options) && q.options.length > 0,
          )
        : [],
    [quizzes],
  );

  const currentQuiz = validQuizzes[currentIndex];
  const total = validQuizzes.length;

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setResult(null);
    setPopUp(false);
    setProgressPct(0);
  }, [quizzes]);

  // Notify parent of button state
  useEffect(() => {
    if (!currentQuiz) {
      onStateChange?.({ label: "Submit", disabled: true });
      return;
    }
    if (result === "correct") {
      const isLast = currentIndex >= total - 1;
      onStateChange?.({
        label: isLast ? "Complete Quiz" : "Next Quiz →",
        disabled: false,
      });
      return;
    }
    onStateChange?.({
      label: "Submit",
      disabled: selectedOption === null,
    });
  }, [currentQuiz, currentIndex, total, result, selectedOption, onStateChange]);

  useImperativeHandle(
    ref,
    () => ({
      action() {
        if (!currentQuiz) return;

        if (result === "correct") {
          if (currentIndex < total - 1) {
            setCurrentIndex((p) => p + 1);
            setSelectedOption(null);
            setResult(null);
            setPopUp(false);
            setProgressPct(0);
            return;
          }
          onPass?.();
          return;
        }

        if (selectedOption === null) return;

        setResult(selectedOption === currentQuiz.answer ? "correct" : "wrong");
        setPopUp(true);
      },
    }),
    [currentQuiz, currentIndex, total, selectedOption, result, onPass],
  );

  // ✅ Correct progress bar: 0 → 100 over 5s, updated ~every 100ms.
  useEffect(() => {
    if (!result) return;
    setProgressPct(0);

    const start = performance.now();
    const interval = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / POPUP_DURATION_MS) * 100);
      setProgressPct(pct);
      if (pct >= 100) clearInterval(interval);
    }, 10);

    const timeout = setTimeout(() => setPopUp(false), POPUP_DURATION_MS);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [result]);

  if (!currentQuiz) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-500">No quiz questions available.</p>
      </div>
    );
  }

  const barWidth = `${100 - progressPct}%`;

  return (
    <div className="flex h-full w-full min-w-0 flex-col justify-between">
      {popUp && (
        <div
          className="fixed left-1/2 top-20 z-[400] w-[calc(100%-2rem)] max-w-sm -translate-x-1/2"
          aria-live="polite"
          aria-atomic="true">
          {result === "correct" && (
            <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 shadow-md">
              <p className="text-sm font-semibold text-green-700">
                Correct! 🎉
              </p>
              <p className="mt-1 text-sm text-green-700/80">
                {currentIndex < total - 1
                  ? "Continue to the next question."
                  : "Quiz completed. Continue to move forward."}
              </p>
              <div
                className="mt-1 h-1"
                style={{ background: "rgb(34, 223, 17)", width: barWidth }}
              />
            </div>
          )}

          {result === "wrong" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 shadow-md">
              <p className="text-sm font-semibold text-red-700">Not quite.</p>
              <p className="mt-1 text-sm text-red-700/80">
                Try again and choose the correct answer.
              </p>
              <div
                className="mt-1 h-1"
                style={{ background: "rgb(223, 34, 17)", width: barWidth }}
              />
            </div>
          )}
        </div>
      )}

      <div>
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text font-semibold uppercase tracking-wide text-slate-500">
              Quiz {currentIndex + 1} / {total}
            </span>
          </div>

          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            {currentQuiz.question}
          </p>

          {currentQuiz.type === "code" && (
            <CodeBlock
              code={currentQuiz.data?.code}
              language={currentQuiz.data?.language}
            />
          )}
        </div>
      </div>

      <div
        className="space-y-3 pb-2"
        role="radiogroup"
        aria-label="Quiz options">
        {currentQuiz.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect =
            result === "correct" && index === currentQuiz.answer;
          const isWrong = result === "wrong" && isSelected;

          return (
            <label
              key={`${currentQuiz.id ?? currentIndex}-${index}`}
              className={`flex min-h-12 w-full cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm shadow-xs transition duration-150 sm:items-center sm:p-4 ${
                isCorrect
                  ? "border-green-400 bg-green-50"
                  : isWrong
                    ? "border-red-400 bg-red-50"
                    : isSelected
                      ? "border-slate-500 bg-slate-100"
                      : "border-slate-200 hover:bg-slate-100"
              }`}>
              <input
                type="radio"
                name={`quiz-${currentQuiz.id ?? currentIndex}`}
                checked={isSelected}
                onChange={() => {
                  if (result === "correct") return;
                  setSelectedOption(index);
                  setResult(null);
                }}
                disabled={result === "correct"}
                className="mt-0.5 h-4 w-4 shrink-0 accent-slate-900 sm:mt-0"
              />
              <span
                className={`min-w-0 flex-1 break-words leading-6 ${
                  isCorrect
                    ? "font-medium text-green-800"
                    : isWrong
                      ? "font-medium text-red-800"
                      : "text-slate-500"
                }`}>
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
});

export default Quiz;
