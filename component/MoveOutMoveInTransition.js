import { useEffect, useReducer, useRef, useState } from "react";

import { PageTransition } from "next-page-transitions";

import { useRouter } from "next/router";

import { getSlashUnit, usePrevious, useGetDirection } from "helper";

const MoveOutMoveInTransition = ({ children, pathNameOrder, lvl = 0 }) => {
  const router = useRouter();
  const previousPath = usePrevious(router.pathname);

  const direction = useGetDirection(
    "left-to-right",
    router,
    pathNameOrder,
    lvl,
    previousPath.current
  );

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
export default MoveOutMoveInTransition;
