import { animated, useSpring } from '@react-spring/web';
import { Gh, In } from '../../constants';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './anchor_links.css';
const AnchorLinks = () => {
  const springs = useSpring({
    from: {
      y: 100,
      opacity: 0,
    },
    to: {
      y: 0,
      opacity: 1,
    },
    config: {
      tension: 170,
      friction: 14,
    },
  });
  return (
    <animated.aside style={springs} className="anchor-links">
      <div className="links-box">
        <a href={Gh} target="_blank" className="link">
          <FaGithub />
        </a>
        <a href={In} target="_blank" className="link">
          <FaLinkedin />
        </a>
      </div>
      <div className="decoration"></div>
    </animated.aside>
  );
};

export default AnchorLinks;
