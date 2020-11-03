import React, { useEffect } from "react";

import Web from "./web";
import { createMemoryHistory } from "history";
import { useRouter } from "next/router";

const PortfolioPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/portfolio/web");
  }, []);
  return <Web />;
};

export default PortfolioPage;
