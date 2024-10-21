import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { renderCode } from "./codeRenderer";

export const MdRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code: renderCode,
      }}
      className="space-y-6"
    >
      {content}
    </Markdown>
  );
};