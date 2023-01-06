import { useRef } from 'react';
import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { motion } from 'framer-motion';
import './knowledge.css';
const Knowledge = () => {
  const scrollRef = useRef(null);
  interface TagCloudOptions {}
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.1, type: 'tween' }}
      viewport={{ root: scrollRef, once: true }}
      className="knowledge-sphere-box"
    >
      <TagCloud
        className="knowledge-sphere"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: 'fast',
          containerClass: 'sphere',
          itemClass: 'sphere--item',
        })}
      >
        {[
          'HTML',
          'CSS',
          'SASS',
          'BEM',
          'TailwindCSS',
          'JavaScript',
          'TypeScript',
          'ReactJS',
          'NodeJS',
          'ES6',
          'Python',
          'Git',
          'GitHub',
          'Bash',
          'Linux',
          'Docker',
          'Ansible',
          'AWS',
          'HTTP',
          'DNS',
          'API',
          'JSON',
        ]}
      </TagCloud>
    </motion.div>
  );
};

export default Knowledge;
