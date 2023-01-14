import { animated, useInView } from '@react-spring/web';
import Sample from '../Sample/Sample';
import ShowMore from '../ShowMore/ShowMore';
import { featured } from '../../constants';
import './projects.css';

const Projects = () => {
  const isMobile = window.innerWidth < 475;
  let ref;
  let springs;
  !isMobile &&
    ([ref, springs] = useInView(
      () => ({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      }),
      {
        once: true,
      },
    ));
  return (
    <animated.section style={springs} ref={ref} id="projects" className="projects">
      <h3 className="title">Featured projects</h3>
      <h4 className="sub-title">Take a look at some of my builds</h4>
      <div className="projects-box">
        {featured.slice(0, 4).map((project) => (
          <Sample
            key={project.id}
            name={project.name}
            info={project.info}
            stack={project.stack}
            code={project.code}
            live={project.live}
            image={project.image}
          />
        ))}
      </div>
      <ShowMore />
    </animated.section>
  );
};

export default Projects;
