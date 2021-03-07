import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/portfolio/web');
  }, []);
  return <div className="contrast"></div>;
};

export default index;
