import { useInView, animated } from '@react-spring/web';
import { SiGithub } from 'react-icons/si';
import { FiShare } from 'react-icons/fi';
interface Props {
  name: string;
  info?: string;
  stack: string[];
  code?: string;
  live?: string;
  image?: string;
}

const Sample = (props: Props) => {
  const isMobile = window.innerWidth < 475;
  let ref, springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          y: 50,
          opacity: 0,
        },
        to: {
          y: 0,
          opacity: 1,
        },
        config: {
          duration: 300,
        },
      }),
      {
        once: true,
        rootMargin: '0px 0px -20% 0px',
      },
    ));
  return (
    <animated.div ref={ref} style={springs} className="sample-box">
      <div className="text-box">
        <h5 className="project-title">{props.name}</h5>
        <p className="project-info">{props.info}</p>
        <ul className="stack">
          {props.stack.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
        <div className="external-links">
          <a target="_blank" href={props.code} className="link">
            <SiGithub />
          </a>
          <a target="_blank" href={props.live} className="link">
            <FiShare />
          </a>
        </div>
      </div>
      <div className="image-box">
        <a target="_blank" href={props.live}>
          <img src={props.image} alt="Screenshot of the project" className="sample" />
        </a>
      </div>
    </animated.div>
  );
};

export default Sample;
