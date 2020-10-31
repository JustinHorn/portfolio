import styles from "styles/portfoliopage.module.css";

import Links from "component/Links";

const PortfolioView = ({ children }) => {
  return (
    <>
      <div className="contrast">
        <nav className={styles.subNav + " medium"}>
          <Links prefix="/portfolio" links={["/web", "/android", "/windows"]} />
        </nav>
      </div>
      <div className={styles.portfolio + " contrast"}>{children}</div>
    </>
  );
};

export default PortfolioView;
