import { animated, useInView } from '@react-spring/web';
import { connectLinks } from '../../constants';
import Button from '../common/Button/Button';
import { SiGmail, SiProtonmail, SiLinkedin, SiGithub, SiFrontendmentor, SiDiscord, SiTelegram } from 'react-icons/si';
import { Mail } from '../../constants';
import './connect.css';
const Connect = () => {
  const icons = [
    <SiGmail />,
    <SiProtonmail />,
    <SiLinkedin />,
    <SiGithub />,
    <SiFrontendmentor />,
    <SiDiscord />,
    <SiTelegram />,
  ];
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 100,
          opacity: 0,
        },
        to: {
          y: 0,
          opacity: 1,
        },
        config: {
          tension: 210,
          friction: 40,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -10% 0px',
      },
    ));
  return (
    <animated.section style={springs} ref={ref} id="connect" className="connect">
      <div className="cta-box">
        <h3 className="title">How do you do?</h3>
        <h4 className="sub-title">Let's get in touch</h4>
        <p className="text">
          I'm <span className="bold">actively</span> looking for <span className="bold">new opportunities</span>. But
          even if you don't have a job offer for me, I'd <span className="bold">appreciate</span> if you pass by just to{' '}
          <span className="bold">say hi!</span> Also, don't hesitate in letting me know any{' '}
          <span className="bold">feedback</span> or <span className="bold">recommendations</span> you have.
        </p>
        <Button title="Get in touch!" link={`mailto:${Mail}`} />
      </div>
      <div className="connect-links-box">
        <animated.ul style={springs} ref={ref} className="connect-links">
          {connectLinks.map((item, index) => (
            <li key={item.id}>
              <a target="_blank" href={item.link} className="link">
                {icons[index]}
              </a>
            </li>
          ))}
        </animated.ul>
      </div>
    </animated.section>
  );
};

export default Connect;
