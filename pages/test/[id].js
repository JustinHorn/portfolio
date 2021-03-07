import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const PortfolioPage = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  return <h1>{id}</h1>;
};

export default PortfolioPage;
