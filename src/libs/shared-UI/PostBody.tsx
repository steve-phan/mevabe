/* eslint-disable react/no-children-prop */
//@ts-nocheck
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
            img: (node) => {
              return (
                <CoverImage
                  alt={node?.alt || "mevebe website"}
                  url={node?.src || ""}
                />
              );
            },
          }}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};
