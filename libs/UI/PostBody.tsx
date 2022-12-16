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
            p: (node) => {
              if (node?.children[0]?.type === "img") {
                return (
                  <CoverImage
                    alt={node?.children[0]?.props?.alt || "mevebe website"}
                    url={node?.children[0]?.props?.src || ""}
                  />
                );
              }

              return <p>{node?.children}</p>;
            },
          }}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </div>
  );
};
