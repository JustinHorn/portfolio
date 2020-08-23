import React from "react";

import { LinkIcon } from "component/Icon";

const Footer = () => (
  <footer>
    <div className="social">
      <LinkIcon
        src="/img/icons/linkedin.png"
        href="https://www.linkedin.com/in/justin-horn-b9a18a1a3/"
      />

      <LinkIcon
        src="/img/icons/github.png"
        href="https://github.com/JustinHorn"
      />
    </div>
    <p>ju-horn@web.de</p>
  </footer>
);

export default Footer;
