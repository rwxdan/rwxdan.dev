import { animated, useSpring } from '@react-spring/web';
import { Mail } from '@/shared';
import './anchor_mail.css';
const AnchorMail = () => {
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
    <animated.aside style={spring} className="anchor-mail">
      <a href={`mailto:${Mail}`} className="mail" title={`${Mail}`}>
        {`${Mail}`}
      </a>
      <div className="decoration"></div>
    </animated.aside>
  );
};

export default AnchorMail;
