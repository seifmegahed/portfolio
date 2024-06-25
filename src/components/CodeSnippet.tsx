import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

export default function CodeSnippet({ code }: { code: string }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden">
      <pre>
        <code className="language-typescript">
          {code}
        </code>
      </pre>
    </div>
  );
}
