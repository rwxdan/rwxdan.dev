import { useRef } from 'react';
import { motion } from 'framer-motion';
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
  const scrollRef = useRef(null);
  let variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ root: scrollRef, once: true }}
      className="sample-box"
    >
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
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        viewport={{ root: scrollRef, once: true }}
        className="image-box"
      >
        <a target="_blank" href={props.live}>
          <img
            src={props.image}
            alt="Screenshot of the project"
            className="sample"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Sample;
