import { Gh, In } from '../../globals/constants';
import './anchor_links.css';
const AnchorLinks = () => {
  return (
    <aside className="anchor-links">
      <div className="links-box">
        <a href={Gh} target="_blank" className="link">
          <i className="devicon-github-original"></i>
        </a>
        <a href={In} target="_blank" className="link">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <div className="decoration"></div>
    </aside>
  );
};

export default AnchorLinks;
