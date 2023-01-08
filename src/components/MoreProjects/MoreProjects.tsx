import { featured } from '../../globals/constants';
import { GitHub, Share } from '../../assets/icons';
import { motion } from 'framer-motion';
const MoreProjects = () => {
  const box = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.1 } },
  };
  const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      variants={box}
      initial="hidden"
      animate="visible"
      className="more"
    >
      {featured.slice(4).map((project) => (
        <motion.li variants={item} key={project.id}>
          <a target="_blank" href={project.live} className="card">
            <div className="relevant">
              <h6 className="name">{project.name}</h6>
              <div className="external-links-box">
                <a
                  target="_blank"
                  href={project.code}
                  className="external-link"
                >
                  <img src={GitHub} alt="GitHub repo" className="icon" />
                </a>
                <a
                  target="_blank"
                  href={project.live}
                  className="external-link"
                >
                  <img src={Share} alt="Live preview" className="icon" />
                </a>
              </div>
            </div>
            <ul className="stack">
              {project.stack.map((item, index) => (
                <li key={index} className="item">
                  {item}
                </li>
              ))}
            </ul>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MoreProjects;
