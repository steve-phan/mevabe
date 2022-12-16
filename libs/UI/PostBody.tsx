/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdownStyles from "./markdown-styles.module.css";
import { CoverImage } from "./CoverImage";

export const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <ReactMarkdown
          children={content}
          components={{
            img: (node) => (
              <CoverImage
                alt={node?.alt || "mevebe website"}
                url={node?.src || ""}
              />
            ),
            p: "div", //TIPS: <div> cannot appear as a descendant of <p>
          }}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};
