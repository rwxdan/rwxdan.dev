import { useRef } from 'react';
import { motion } from 'framer-motion';
import Sample from '../Sample/Sample';
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
        {featured.map((project) => (
          <Sample
            name={project.name}
            info={project.info}
            stack={project.stack}
            code={project.code}
            live={project.live}
            image={project.image}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
