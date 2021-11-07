import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import Link from "next/link";

const Nav = (props) => {
  const router = useRouter();
  const locale = router.locale;
  return (
    <nav>
      <div className="local-links">
        <Link locale="en" href="/en">
          <span className={locale === "en" ? "active" : ""}>EN</span>
        </Link>
        <Link locale="de" href="/de">
          <span className={locale === "de" ? "active" : ""}>DE</span>
        </Link>
      </div>

      <div className="navButtons">
        <button
          title="Download Resume"
          onClick={() => window.open(`/JustinHornResume_${locale}.pdf`)}
        >
          <FontAwesomeIcon icon={"file-alt"} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
