import styles from "styles/portfoliopage.module.css";

import Links from "component/Links";

import { portfolioNavbarData } from "data";

const PortfolioView = ({ children }) => {
  return (
    <>
      <div className="contrast">
        <nav className={styles.subNav + " medium"}>
          <Links {...portfolioNavbarData} />
        </nav>
      </div>
      <div className={styles.portfolio + " contrast"}>{children}</div>
    </>
  );
};

export default PortfolioView;
