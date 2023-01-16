import { useState } from 'react';
import { MoreProjects } from '@/components';
import './show_more.css';
const ShowMore = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="show-more">
      <div className="more-box">{Open && <MoreProjects />}</div>
      <button onClick={() => setOpen((prev) => !prev)} className="show-more-btn">
        Show {Open ? 'less' : 'more'}
      </button>
    </div>
  );
};

export default ShowMore;
