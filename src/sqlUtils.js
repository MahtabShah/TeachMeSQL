// sqlUtils.js
import { format } from "sql-formatter";
import hljs from "highlight.js";

export const formatSQL = (code) => {
  if (typeof code !== "string") return "";
  try {
    return format(code, { language: "sql", tabWidth: 4, keywordCase: "upper" });
  } catch {
    return code;
  }
};

export const highlightCode = (code, language) => {
  const safeCode = typeof code === "string" ? code : "";
  const safeLang =
    typeof language === "string" && language.trim()
      ? language.toLowerCase()
      : "plaintext";

  if (["plaintext", "text", "txt"].includes(safeLang)) {
    return hljs.escapeHTML(safeCode);
  }
  if (!hljs.getLanguage(safeLang)) return hljs.escapeHTML(safeCode);

  try {
    return hljs.highlight(safeCode, { language: safeLang }).value;
  } catch {
    return hljs.escapeHTML(safeCode);
  }
};
