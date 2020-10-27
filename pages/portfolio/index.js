import React, { useState } from "react";

import styles from "styles/portfoliopage.module.css";

import Web from "./web";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

const PortfolioPage = () => {
  return <Web />;
};

export default PortfolioPage;
