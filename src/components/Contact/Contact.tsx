import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ContactLinks } from '../../globals/constants';
import './contact.css';
const Contact = () => {
  const scrollRef = useRef(null);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ root: scrollRef, once: true }}
      id="contact"
      className="contact"
    >
      <div className="cta-box">
        <h3 className="title">What's Next?</h3>
        <h4 className="sub-title">Let's talk</h4>
        <p className="text">
          I'm <span className="bold">actively</span> looking for{' '}
          <span className="bold">new opportunities</span>. But don't worry, even
          if you don't have a job offering for me, I'd{' '}
          <span className="bold">appreciate</span> that you pass by to give some{' '}
          <span className="bold">feedback</span>, any{' '}
          <span className="bold">recommendation</span> or just to{' '}
          <span className="bold">say hi!</span>
        </p>
        <a href={`mailto:${Mail}`} className="cta">
          Say Hi!
        </a>
      </div>
      <div className="contact-links-box">
        <motion.ul
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ root: scrollRef, once: true }}
          className="contact-links"
        >
          {ContactLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="link">
                <img src={item.icon} alt={item.id} />
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Contact;
