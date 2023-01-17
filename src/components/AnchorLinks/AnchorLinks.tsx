import { animated, useSpring } from '@react-spring/web';
import { Gh, In } from '@/shared';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './anchor_links.css';
const AnchorLinks = () => {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 3000,
    config: {
      duration: 300,
    },
  });
  return (
    <animated.aside style={spring} className="anchor-links">
      <div className="links-box">
        <a href={`${Gh}`} target="_blank" className="link">
          <FaGithub />
        </a>
        <a href={`${In}`} target="_blank" className="link">
          <FaLinkedin />
        </a>
      </div>
      <div className="decoration"></div>
    </animated.aside>
  );
};

export default AnchorLinks;
