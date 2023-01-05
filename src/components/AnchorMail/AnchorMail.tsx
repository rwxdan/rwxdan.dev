import { Mail } from '../../globals/constants';
import './anchor_mail.css';
const AnchorMail = () => {
  return (
    <aside className="anchor-mail">
      <a href={`mailto:${Mail}`} className="mail">
        {Mail}
      </a>
      <div className="decoration"></div>
    </aside>
  );
};

export default AnchorMail;
