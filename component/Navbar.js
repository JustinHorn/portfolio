import React from 'react';
import Links from 'component/Links';
import { navbarData } from 'data';

const Navbar = () => {
  return (
    <div className="hard">
      <nav className="space-between">
        <div className="links">
          <Links {...navbarData} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
