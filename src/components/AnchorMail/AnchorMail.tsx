import { motion } from 'framer-motion';
import { Mail } from '../../constants';
import './anchor_mail.css';
const AnchorMail = () => {
  return (
    <motion.aside
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="anchor-mail"
    >
      <a href={`mailto:${Mail}`} className="mail">
        {Mail}
      </a>
      <div className="decoration"></div>
    </motion.aside>
  );
};

export default AnchorMail;
