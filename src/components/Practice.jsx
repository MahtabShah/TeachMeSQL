import { useEffect, useState } from "react";

function Practice({ practice, onComplete }) {
  const [answer, setAnswer] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setAnswer("");
    setCompleted(false);
  }, [practice]);

  if (!practice) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) return;
    setCompleted(true);
    onComplete?.();
  };

  return (
    <div className="w-full min-w-0">
      <div className="mb-5 sm:mb-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Practice
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-7 text-slate-900 sm:text-xl sm:leading-8">
          Practice Question
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
          {practice.question}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={completed}
          placeholder="Write your answer..."
          aria-label="Practice answer"
          className="min-h-[180px] w-full resize-y rounded-xl border border-slate-300 bg-white p-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:bg-slate-50 sm:min-h-[200px] sm:p-5 sm:text-base"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-5" aria-live="polite" aria-atomic="true">
            {completed ? (
              <p className="text-sm font-medium text-green-600">
                Practice completed.
              </p>
            ) : (
              <p className="text-xs leading-5 text-slate-500">
                Write your answer before continuing.
              </p>
            )}
          </div>

          {!completed && (
            <button
              type="submit"
              disabled={!answer.trim()}
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
              Submit Answer
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Practice;
