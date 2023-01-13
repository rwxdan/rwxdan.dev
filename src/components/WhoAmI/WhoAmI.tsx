import { useInView, animated } from '@react-spring/web';
import Knowledge from '../Knowledge/Knowledge';
import './whoami.css';
const WhoAmI = () => {
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
          tension: 280,
          friction: 60,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -30% 0px',
      }
    ));
  return (
    <section id="whoami" className="whoami">
      <animated.div ref={ref} style={springs} className="whoami-box">
        <div className="text-box">
          <h3 className="title">WhoAmI</h3>
          <p className="text">
            Hi there! My name is Daniel. I'm a Front-end Web Developer from
            Venezuela. As far back as I can remember, I've always been curious
            about how
            <span className="italic"> things</span> work. Oftentimes I found
            myself <span className="bold">solving</span> little puzzles for fun,{' '}
            <span className="bold">building</span> something new, and then{' '}
            <span className="bold">transforming </span>it. Truth to be told, I
            do love <span className="bold">learning</span> new things!
          </p>

          <p className="text">
            My Frontend skills are spread across many projects that I've built
            by using vanilla <span className="bold">HTML</span>,{' '}
            <span className="bold">CSS</span> and{' '}
            <span className="bold">JavaScript</span>. Also{' '}
            <span className="bold">TypeScript</span>,{' '}
            <span className="bold">React</span>,{' '}
            <span className="bold">TailwindCSS</span>,{' '}
            <span className="bold">SCSS</span> and many other libraries that I
            continue to learn and build with{' '}
            <span className="bold">every day!</span>
          </p>
        </div>
        <Knowledge />
      </animated.div>
    </section>
  );
};

export default WhoAmI;
