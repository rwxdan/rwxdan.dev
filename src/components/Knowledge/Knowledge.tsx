import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import { motion } from 'framer-motion';
import './knowledge.css';
const LangSphere = () => {
  const scrollRef = useRef(null);
  const isMobile = window.innerWidth < 800;
  useEffect(() => {
    return () => {
      const container: string = '.tagcloud';
      const texts: string[] = [
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
      ];

      const options: object = {
        radius: !isMobile ? 300 : 150,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        keep: true,
        containerClass: 'sphere',
        itemClass: 'sphere--item',
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.1, type: 'tween' }}
      viewport={{ root: scrollRef, once: true }}
      className="knowledge-sphere-box"
    >
      <div className="knowledge-sphere">
        <span className="tagcloud"></span>
      </div>
    </motion.div>
  );
};

export default LangSphere;
