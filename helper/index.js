import { useRef, useEffect } from 'react';

export const getSlashUnit = (p, index) => {
  const unit = p.slice(1).split('/');
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
  pathNameOrder,
  path,

  previousPath
) => {
  console.log(pathNameOrder);
  const direction = useRef(init);

  if (previousPath && previousPath !== path) {
    const prevPath = previousPath;
    const nextPath = path;

    if (prevPath && nextPath) {
      const prevIndex = pathNameOrder.findIndex((p) => p.includes(prevPath));

      const nextIndex = pathNameOrder.findIndex((p) => p.includes(nextPath));

      if (prevIndex > nextIndex) {
        direction.current = 'right-to-left';
      } else if (prevIndex < nextIndex) {
        direction.current = 'left-to-right';
      }
    }
  }

  return direction;
};
