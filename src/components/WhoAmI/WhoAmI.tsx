import { useInView, animated } from '@react-spring/web';
import './whoami.css';
const WhoAmI = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 50,
          opacity: 0,
        },
        to: {
          y: -20,
          opacity: 1,
        },
        config: {
          duration: 500,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -25% 0px',
      },
    ));
  return (
    <section id="about" className="whoami">
      <animated.div ref={ref} style={springs}>
        <div className="text-box">
          <h3 className="title">About</h3>
          <p className="text">
            My name is Daniel. I'm a frontend web developer based in Venezuela. I'm{' '}
            <span className="bold">passionate</span> about cutting-edge, pixel-perfect, responsive user interfaces, and
            dynamic user experiences.{' '}
          </p>

          <p className="text">
            My enthusiasm for web development began when I found myself hacking together a local web dashboard — at that
            time, I didn't imagine that tinkering with <span className="bold">HTML</span>,{' '}
            <span className="bold">CSS</span> and <span className="bold">JavaScript</span> could get this far, yet it
            turned out to be <span className="bold">much</span> more than that!
          </p>

          <p className="text">
            Nowadays, I don't keep <span className="italic">hacking</span> around with{' '}
            <span className="bold">HTML</span>, <span className="bold">CSS</span> and{' '}
            <span className="bold">JavaScript</span> anymore — my <span className="bold">focus</span> now is to develop
            things for the real world by using them! And of course <span className="bold">TypeScript</span>,{' '}
            <span className="bold">React</span>, <span className="bold">TailwindCSS</span>,{' '}
            <span className="bold">SCSS</span>, and many other frameworks and libraries that I work with every day.{' '}
          </p>
        </div>
      </animated.div>
    </section>
  );
};

export default WhoAmI;
