import { useEffect, useRef } from "react";

const useHandleOutsideClick = (callback: () => void) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: Event) {
      if (
        container.current &&
        !container.current.contains(event.target as Node)
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return container;
};

export default useHandleOutsideClick;
