import { TagCloud } from '@frank-mayer/react-tag-cloud';
import './knowledge.css';
const Knowledge = () => {
  interface TagCloudOptions {}
  return (
    <div className="knowledge-sphere-box">
      <TagCloud
        className="knowledge-sphere"
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(570, w.innerWidth, w.innerHeight) / 2,
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
          'Vite',
          'Babel',
          'ES6',
          'Python',
          'Git',
          'GitHub',
          'Bash',
          'Linux',
          'AWS',
          'HTTP',
          'DNS',
          'API',
          'REST',
          'JSON',
        ]}
      </TagCloud>
    </div>
  );
};

export default Knowledge;
