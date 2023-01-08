import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import './nav.css';
import logo from '/src/assets/logo.svg';
import { Menu, Close } from '../../assets/icons';
import { navLinks } from '../../constants';
const Nav = () => {
  const [Open, setOpen] = useState(false);
  const springs = useSpring({
    from: {
      x: 100,
      opacity: 0,
    },
    to: {
      x: 0,
      opacity: 1,
    },
    config: {
      tension: 170,
      friction: 14,
    },
  });
  return (
    <nav className="nav">
      <div className="nav-logo-box">
        <a href={`${location}`} onClick={() => location.reload()}>
          <img src={logo} alt="rwxdan" className="nav-logo" />
        </a>
      </div>
      <div>
        <img
          src={Open ? Close : Menu}
          alt="Menu"
          className="nav-menu"
          onClick={() => setOpen((prev) => !prev)}
        />
        <animated.div style={springs}>
          <ul className={`nav-links-box ${Open ? 'expanded' : ''}`}>
            {navLinks.map((item, index) => (
              <li key={item.id}>
                <a
                  target={`${
                    index === navLinks.length - 1 ? '_blank' : '_self'
                  }`}
                  href={`${
                    index === navLinks.length - 1
                      ? '/resume.pdf'
                      : `#${item.id}`
                  }`}
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
        </animated.div>
      </div>
    </nav>
  );
};

export default Nav;
