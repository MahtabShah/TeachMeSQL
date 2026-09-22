import { useMemo } from "react";
import { highlightCode, formatSQL } from "../sqlUtils";

function CodeBlock({ code, language = "plaintext" }) {
  const highlighted = useMemo(() => {
    const original = typeof code === "string" ? code : "";
    const formatted =
      language?.toLowerCase() === "sql" ? formatSQL(original) : original;
    return highlightCode(formatted, language);
  }, [code, language]);

  return (
    <div className="w-full min-w-0">
      <pre className="code-block w-full max-w-full overflow-x-auto rounded-lg p-4 text-sm leading-6 sm:p-5">
        <code
          className={`language-${language} hljs whitespace-pre`}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </pre>
    </div>
  );
}

export default CodeBlock;
