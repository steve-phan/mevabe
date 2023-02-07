import { useState, useEffect } from "react";
import cx from "classnames";

import { IconToTop } from "Icons";

export const ScrollTopIcon = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === false) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: [0] }
    );
    observer.observe(document.getElementsByTagName("h1")[0]);
    return () => {
      observer.disconnect();
    };
  }, []);

  const onClick = () => {
    document?.getElementById("article_wrapper")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      role="tooltip"
      className={cx(
        "transition-200 scroll-top z-50",
        show ? "opacity-100" : "opacity-0"
      )}
    >
      <button
        onClick={onClick}
        className={cx("circle border-0")}
        style={{ width: 40, height: 40 }}
      >
        <IconToTop />
      </button>
    </div>
  );
};
