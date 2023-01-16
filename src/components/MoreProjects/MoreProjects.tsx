import { animated, useSpring } from '@react-spring/web';
import { featured } from '@/constants';
import { SiGithub } from 'react-icons/si';
import { FiShare } from 'react-icons/fi';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
const MoreProjects = () => {
  const box = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const item = useSpring({
    from: {
      opacity: 0,
      y: -100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: {
      tension: 280,
      friction: 30,
    },
  });
  return (
    <animated.ul style={box} className="more">
      {featured.slice(4).map((project) => (
        <animated.li style={item} key={project.id}>
          <a target="_blank" href={project.live || project.code} className="card">
            <div className="decoration">
              <BsFillBookmarkStarFill />
            </div>
            <div className="relevant">
              <h6 className="name">{project.name}</h6>
              <div className="external-links-box">
                <a target="_blank" href={project.code} className="external-link">
                  <SiGithub />
                </a>
                {project.live && (
                  <a target="_blank" href={project.live} className="external-link">
                    <FiShare />
                  </a>
                )}
              </div>
            </div>
            <p className="info">{project.info}</p>
            <ul className="stack">
              {project.stack.map((item, index) => (
                <li key={index} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </a>
        </animated.li>
      ))}
    </animated.ul>
  );
};

export default MoreProjects;
