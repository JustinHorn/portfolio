import { useEffect, useReducer, useRef, useState } from 'react';

import { PageTransition } from 'next-page-transitions';

import { useRouter } from 'next/router';

import { getSlashUnit, usePrevious, useGetDirection } from 'helper';

const MoveOutMoveInTransition = ({ children, path, pathNameOrder }) => {
  const previousPath = usePrevious('web');

  const direction = useGetDirection(
    'left-to-right',
    pathNameOrder,
    path,

    previousPath.current
  );

  return (
    <PageTransition
      timeout={300}
      classNames={direction.current + '-transition'}
    >
      {children}
    </PageTransition>
  );
};

// slashUnit finden oder -1 falls sie nicht existiert
export default MoveOutMoveInTransition;
