import { useRef } from 'react';
import { motion } from 'framer-motion';
import LangSphere from '../Knowledge/Knowledge';
import './whoami.css';
const WhoAmI = () => {
  const scrollRef = useRef(null);
  return (
    <section id="whoami" className="whoami">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef, once: true }}
        className="whoami-box"
      >
        <div className="text-box">
          <h3 className="title">WhoAmI</h3>
          <p className="text">
            Hi there! My name is Daniel. I'm a self-taught Web developer from
            Venezuela. As far back as I can remember, I've always been curious
            about how
            <span className="italic"> things</span> work. Oftentimes I found
            myself <span className="bold">solving</span> little puzzles for fun,{' '}
            <span className="bold">building</span> something new, and then{' '}
            <span className="bold">transforming </span>it. Truth to be told, I
            do love <span className="bold">learning</span> new things!
          </p>
          <p className="text">
            Before being around the <span className="mono">IT</span> world I
            studied <span className="bold">Finances</span>, I even got a job at
            the{' '}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Central_Bank_of_Venezuela"
              className="external-link"
            >
              BCV
            </a>
            . However, at the start of <span className="mono">2020</span> I had
            some free time in my hands, I wanted to{' '}
            <span className="bold">explore</span> something else than
            spreadsheets and such. <span className="mono">Python</span> and{' '}
            <span className="mono">Linux</span> crossed my mind, so why not?
          </p>
          <p className="text">
            Fast-forward to today, I've had the joy of gathering knowledge and
            skills around <span className="bold">Software Development</span>,{' '}
            <span className="bold">System Administration</span> and{' '}
            <span className="bold">Networking</span>. I might not be an expert
            on any of those, but I'm proud to say that I've had the privilege of
            collaborating with engineers from{' '}
            <a
              target="_blank"
              href="https://www.cisco.com/"
              className="external-link"
            >
              Cisco
            </a>
            ,{' '}
            <a
              target="_blank"
              href="https://www.redhat.com/en"
              className="external-link"
            >
              Red Hat
            </a>{' '}
            and{' '}
            <a
              target="_blank"
              href="https://www.oracle.com/"
              className="external-link"
            >
              Oracle
            </a>
            . You wouldn't imagine, it turns out that what I'm most passionate
            about is <span className="bold">Web Development!</span>
          </p>
        </div>
        <LangSphere />
      </motion.div>
    </section>
  );
};

export default WhoAmI;
