import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Web from 'pages/web';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/web');
  }, []);
  return <Web />;
};

export default index;
