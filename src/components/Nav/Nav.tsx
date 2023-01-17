import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import logo from '@static/logo.svg';
import { Menu, Close } from '@static/icons';
import { navLinks } from '@/shared';
import './nav.css';
const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const a_nav = useSpring({
    from: {
      y: -100,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
    config: {
      duration: 300,
    },
  });

  const [Open, setOpen] = useState(false);
  return (
    <nav>
      <animated.div style={a_nav} id="nav" className={`nav ${scrollPosition && 'blur-bg'}`}>
        <div className="nav-logo-box">
          <a href={`${window.location.origin}`} onClick={() => window.location.reload}>
            <img src={logo} alt="rwxdan" className="nav-logo" />
          </a>
        </div>
        <div>
          <img src={Open ? Close : Menu} alt="Menu" className="nav-menu" onClick={() => setOpen((prev) => !prev)} />
          <div>
            <ul className={`nav-links-box ${Open && 'expanded'} ${scrollPosition && 'fix'}`}>
              {navLinks.map((item, index) => (
                <li key={item.id}>
                  <a
                    target={`${index === navLinks.length - 1 ? '_blank' : '_self'}`}
                    href={`${index === navLinks.length - 1 ? '/resume.pdf' : `#${item.id}`}`}
                    className={` ${index === navLinks.length - 1 ? 'nav-links resume' : 'nav-links'}  `}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </animated.div>
    </nav>
  );
};

export default Nav;
