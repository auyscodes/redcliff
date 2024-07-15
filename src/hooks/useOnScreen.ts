import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}
