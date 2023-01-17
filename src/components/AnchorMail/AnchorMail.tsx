import { animated, useSpring } from '@react-spring/web';
import { Mail } from '@/shared';
import './anchor_mail.css';
const AnchorMail = () => {
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
    <animated.aside style={springs} className="anchor-mail">
      <a href={`mailto:${Mail}`} className="mail" title={`${Mail}`}>
        {`${Mail}`}
      </a>
      <div className="decoration"></div>
    </animated.aside>
  );
};

export default AnchorMail;
