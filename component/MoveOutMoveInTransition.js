import { useEffect, useReducer, useRef, useState } from "react";

import { PageTransition } from "next-page-transitions";

import { useRouter } from "next/router";

const MoveOutMoveInTransition = ({ children, navbarlinks }) => {
  const router = useRouter();
  const previousPath = usePrevious(router.pathname);

  const direction = useRef("left-to-right");

  if (previousPath.current) {
    if (previousPath.current !== router.pathname) {
      console.log(previousPath);
      const prevIndex = navbarlinks.findIndex((p) =>
        previousPath.current.includes(p)
      );

      const nextIndex = navbarlinks.findIndex((p) =>
        router.pathname.includes(p)
      );

      console.log(navbarlinks);
      console.log(previousPath);

      if (prevIndex !== -1 && nextIndex !== -1) {
        console.log(prevIndex);
        console.log(nextIndex);

        if (prevIndex > nextIndex) {
          direction.current = "right-to-left";
        } else if (prevIndex < nextIndex) {
          direction.current = "left-to-right";
        }
        console.log(direction);
      }
    }
  } else {
    console.log("previous is null");
  }
  return (
    <PageTransition
      timeout={300}
      classNames={direction.current + "-transition"}
    >
      {children}
    </PageTransition>
  );
};

// slashUnit finden oder -1 falls sie nicht existiert
const getSlashUnit = (path, unitIndex) => {
  let nextSlash = 0;
  for (let i = 0; i <= unitIndex; i++) {
    if (path[0] === "/") path = path.slice(1);
    nextSlash = path.indexOf("/", nextSlash);
    nextSlash === -1 && (nextSlash = path.length);

    if (i === unitIndex) {
      return path.slice(0, nextSlash);
    } else {
      path = path.slice(nextSlash + 1);
    }
  }

  return path;
};

export default MoveOutMoveInTransition;

const usePrevious = (next) => {
  const prev = useRef(null);
  useEffect(() => {
    prev.current = next;
  }, [next]);

  return prev;
};
