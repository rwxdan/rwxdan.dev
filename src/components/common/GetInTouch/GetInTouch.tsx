import './get_in_touch.css';
import { Mail } from '../../../constants';
const GetInTouch = () => {
  return (
    <div className="get-in-touch-box">
      <a href={`mailto:${Mail}`} className="get-in-touch">
        Get in touch!
      </a>
    </div>
  );
};

export default GetInTouch;
