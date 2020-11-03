import { useRef, useEffect } from "react";

export const getSlashUnit = (p, index) => {
  const unit = p.slice(1).split("/");
  return unit[index];
};

export const usePrevious = (next) => {
  const prev = useRef(null);
  useEffect(() => {
    prev.current = next;
  }, [next]);

  return prev;
};

export const useGetDirection = (
  init,
  router,
  pathNameOrder,
  lvl,
  previousPath
) => {
  const direction = useRef(init);

  if (previousPath && previousPath !== router.pathname) {
    const prevPath = getSlashUnit(previousPath, lvl);
    const nextPath = getSlashUnit(router.pathname, lvl);

    if (prevPath && nextPath) {
      const prevIndex = pathNameOrder.findIndex((p) => p.includes(prevPath));

      const nextIndex = pathNameOrder.findIndex((p) => p.includes(nextPath));

      if (prevIndex > nextIndex) {
        direction.current = "right-to-left";
      } else if (prevIndex < nextIndex) {
        direction.current = "left-to-right";
      }
    }
  }

  return direction;
};
