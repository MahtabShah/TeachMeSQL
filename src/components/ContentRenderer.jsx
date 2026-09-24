import Practice from "./Practice";
import Quiz from "./Quiz";
import CodeBlock from "./CodeBlock";
import { mySet } from "../sqlKeywords"; // move mySet out — see below
import Table from "./Table";

function renderTextWithKeywords(text) {
  // Preserve paragraph breaks and highlight only real keywords.
  const paragraphs = (text ?? "").split(/\n+/);

  return paragraphs.map((line, lineIdx) => {
    // Split on word boundaries, keep spaces
    const tokens = line.split(/(\s+)/);
    return (
      <span key={lineIdx} className="block">
        {tokens.map((tok, i) => {
          // Only highlight whole-word, uppercase SQL keywords.
          // Avoids "as", "in", "on" false positives in prose.
          const trimmed = tok.trim();
          const isKeyword =
            trimmed && /^[A-Z][A-Z_]*$/.test(trimmed) && mySet.has(trimmed);

          if (isKeyword) {
            return (
              <span key={i} className="rounded bg-slate-200 px-[5px] py-[1px]">
                {tok}
              </span>
            );
          }
          return <span key={i}>{tok}</span>;
        })}
      </span>
    );
  });
}

function ContentRenderer({
  contents,
  onPracticeComplete,
  onQuizPass,
  quizRef,
  onQuizStateChange,
}) {
  if (!Array.isArray(contents) || contents.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
        No content available.
      </div>
    );
  }

  const renderers = {
    heading: (block) => (
      <h3 className="mb-3 text-lg font-semibold leading-7 text-slate-900 sm:text-xl sm:leading-8">
        {block?.data?.text ?? ""}
      </h3>
    ),

    text: (block) => (
      <p className="leading-7 text-base text-slate-700 sm:text-base sm:leading-7">
        {renderTextWithKeywords(block?.data?.text)}
      </p>
    ),

    table: (block) => <Table table={block.data} />,

    code: (block) => (
      <CodeBlock code={block?.data?.code} language={block?.data?.language} />
    ),

    example: (block) => (
      <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        {block?.data?.title && (
          <h4 className="mb-2 text-base font-semibold leading-6 text-slate-900 sm:text-lg">
            {block.data.title}
          </h4>
        )}
        {block?.data?.text && (
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            {block.data.text}
          </p>
        )}
      </div>
    ),

    image: (block) => {
      const src = block?.data?.src;
      if (!src) {
        return (
          <div className="flex min-h-32 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-500">
            Image unavailable.
          </div>
        );
      }
      return (
        <div className="w-full overflow-hidden">
          <img
            src={src}
            alt={block?.data?.alt || "Learning illustration"}
            loading="lazy"
            decoding="async"
            className="block h-auto max-w-full rounded-2xl object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      );
    },

    practice: (block) => (
      <div className="w-full min-w-0">
        <Practice
          practice={block?.data}
          onComplete={() => onPracticeComplete?.(block.id)}
        />
      </div>
    ),

    quiz: (block) => (
      <div className="w-full min-w-0">
        <Quiz
          ref={quizRef}
          quizzes={block?.data}
          onPass={() => onQuizPass?.(block.id)}
          onStateChange={onQuizStateChange}
        />
      </div>
    ),
  };

  return (
    <div className="w-full min-w-0 space-y-5 sm:space-y-6">
      {contents.map((block) => {
        if (!block?.id) return null;

        // ✅ Guard: some blocks (like quizzes) use block.data directly
        // without sub_blocks. Handle both shapes.
        if (Array.isArray(block.sub_blocks)) {
          return block.sub_blocks.map((sub) => {
            const render = renderers[sub.type];
            if (!render) {
              return (
                <div
                  key={sub.id}
                  className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                  Unsupported content type: {sub.type}
                </div>
              );
            }
            return (
              <div key={sub.id} className="mb-2 mt-5 w-full min-w-0">
                {render(sub)}
              </div>
            );
          });
        }

        return null;
      })}
    </div>
  );
}

export default ContentRenderer;
