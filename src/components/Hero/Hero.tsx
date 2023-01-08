import { animated, useSpring } from '@react-spring/web';
import './hero.css';
import { Me } from '../../assets/images';
const Hero = () => {
  const isMobile = window.innerWidth < 800;
  let firstBoot;
  let secondBoot;
  !isMobile
    ? ((firstBoot = useSpring({
        from: {
          opacity: 0,
          y: 50,
        },
        to: {
          opacity: 1,
          y: 0,
        },
        delay: 1900,
        config: {
          tension: 210,
          friction: 30,
        },
      })),
      (secondBoot = useSpring({
        from: {
          opacity: 0,
          y: 30,
        },
        to: {
          opacity: 1,
          y: 0,
        },
        delay: 2200,
        config: {
          tension: 280,
          friction: 60,
        },
      })))
    : '';
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, World!</p>
          <animated.h1 style={firstBoot} className="title">
            I'm <br className="break" />{' '}
            <span className="name">Daniel Castro</span>
          </animated.h1>
          <animated.div style={secondBoot}>
            <h2 className="sub-title">
              I build things for the client-side of the Web.
            </h2>
            <p className="intro">
              A.K.A <span className="username">rwxdan</span>. I'm a Front-end
              advocate devoted to create Web Applications that are both
              functional and aesthetically pleasing.{' '}
              <span className="status">
                I'm currently looking for new opportunities!
              </span>
            </p>
          </animated.div>
        </div>
        <animated.div style={firstBoot} className="image-box">
          <div className="wrapper">
            <div className="image-wrapper">
              <div className="background"></div>
              <img src={Me} alt="Daniel Castro" className="profile" />
            </div>
            <div className="tag-box">
              <p className="tag">It's me, rwxdan!</p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;
