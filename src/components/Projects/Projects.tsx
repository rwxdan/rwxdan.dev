import { animated, useInView } from '@react-spring/web';
import { Sample, ShowMore } from '@/components';
import { featured } from '@/shared';
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
        config: {
          duration: 500,
        },
      }),
      {
        once: true,
      },
    ));
  return (
    <section ref={ref} id="projects">
      <animated.div style={springs} className="projects">
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
      </animated.div>
    </section>
  );
};

export default Projects;
