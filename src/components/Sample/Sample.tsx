import { useInView, animated } from '@react-spring/web';
import { GitHub, Share } from '../../assets/icons';

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
            tension: 280,
            friction: 60,
          },
        }),
        {
          once: true,
          rootMargin: '0px 0px -15% 0px',
        }
      ))
    : '';
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
            <img src={GitHub} alt="GitHub repo" className="icon" />
          </a>
          <a target="_blank" href={props.live} className="link">
            <img src={Share} alt="Live preview" className="icon" />
          </a>
        </div>
      </div>
      <div className="image-box">
        <a target="_blank" href={props.live}>
          <img
            src={props.image}
            alt="Screenshot of the project"
            className="sample"
          />
        </a>
      </div>
    </animated.div>
  );
};

export default Sample;
