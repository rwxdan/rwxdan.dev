import { useRef } from 'react';
import { motion } from 'framer-motion';
import Sample from '../Sample/Sample';
import ShowMore from '../ShowMore/ShowMore';
import { featured } from '../../globals/constants';
import './projects.css';

const Projects = () => {
  const scrollRef = useRef(null);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      id="projects"
      className="projects"
    >
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
    </motion.section>
  );
};

export default Projects;
