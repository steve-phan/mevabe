import { useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

interface IUseSideBarScrollprops {
  isOpen: boolean;
}

export const useSideBarScroll = ({ isOpen }: IUseSideBarScrollprops) => {
  const scrollParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollParentRef.current!.scrollTop = 0;
      const preferredScrollParent = scrollParentRef.current!;
      disableBodyScroll(preferredScrollParent);
      return () => enableBodyScroll(preferredScrollParent);
    } else {
      return undefined;
    }
  }, [isOpen]);

  return { scrollParentRef };
};
