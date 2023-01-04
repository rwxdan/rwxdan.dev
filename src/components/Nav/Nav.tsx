import { useState } from 'react';
import './nav.css';
import logo from '/src/assets/logo.svg';
import menu from '/src/assets/icons/menu.svg';
import close from '/src/assets/icons/close.svg';
import { navLinks } from '../../globals/constants';
const Nav = () => {
  const [Open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-logo-box">
        <a href="#home">
          <img src={logo} alt="rwxdan" className="nav-logo" />
        </a>
      </div>
      <div>
        <img
          src={Open ? close : menu}
          alt="Menu"
          className="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        />
        <ul className={`nav-links-box ${Open ? 'expanded' : ''}`}>
          {navLinks.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={` ${
                  index === navLinks.length - 1
                    ? 'nav-links resume'
                    : 'nav-links'
                }  `}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
