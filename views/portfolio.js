import styles from "styles/portfoliopage.module.css";

import Links from "component/Links";

import { portfolionav } from "data";

const PortfolioView = ({ children }) => {
  return (
    <>
      <div className="contrast">
        <nav className={styles.subNav + " medium"}>
          <Links {...portfolionav} />
        </nav>
      </div>
      <div className={styles.portfolio + " contrast"}>{children}</div>
    </>
  );
};

export default PortfolioView;
