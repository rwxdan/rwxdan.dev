import { animated, useInView } from '@react-spring/web';
import { Mail, ContactLinks } from '../../constants';
import './contact.css';
const Contact = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile
    ? ([ref, springs] = useInView(
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
        }
      ))
    : '';
  return (
    <animated.section
      style={springs}
      ref={ref}
      id="contact"
      className="contact"
    >
      <div className="cta-box">
        <h3 className="title">What's Next?</h3>
        <h4 className="sub-title">Let's talk</h4>
        <p className="text">
          I'm <span className="bold">actively</span> looking for{' '}
          <span className="bold">new opportunities</span>. But don't worry, even
          if you don't have a job offering for me, I'd{' '}
          <span className="bold">appreciate</span> that you pass by to give some{' '}
          <span className="bold">feedback</span>, any{' '}
          <span className="bold">recommendation</span> or just to{' '}
          <span className="bold">say hi!</span>
        </p>
        <a href={`mailto:${Mail}`} className="cta">
          Say Hi!
        </a>
      </div>
      <div className="contact-links-box">
        <animated.ul style={springs} ref={ref} className="contact-links">
          {ContactLinks.map((item) => (
            <li key={item.id}>
              <a target="_blank" href={item.link} className="link">
                <img src={item.icon} alt={item.id} />
              </a>
            </li>
          ))}
        </animated.ul>
      </div>
    </animated.section>
  );
};

export default Contact;
