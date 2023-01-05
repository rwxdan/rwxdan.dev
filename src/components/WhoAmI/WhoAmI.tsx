import './whoami.css';
import { motion } from 'framer-motion';
import LangSphere from '../Knowledge/Knowledge';
const WhoAmI = () => {
  return (
    <section className="whoami">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="whoami-box"
        id="whoami"
      >
        <div className="text-box">
          <h3 className="title">WhoAmI</h3>
          <p className="text">
            Hi there! My name is Daniel. I'm a self-taught Web developer from
            Venezuela. Since I was a child I've been curious about how
            <span className="italic"> things</span> work, sometimes to{' '}
            <span className="bold">build</span> something new based on that
            knowledge, often times to <span className="bold">transform</span>{' '}
            them — To be honest, during my childhood my mom was never{' '}
            <span className="italic">too</span> happy about the latter — Anyhow,{' '}
            <span className="bold"> I do love learning new things!</span>
          </p>
          <p className="text">
            Before being around the <span className="mono">IT</span> world I
            studied <span className="bold">Finances</span>, I even got a job at
            the{' '}
            <a
              href="https://en.wikipedia.org/wiki/Banco_de_Venezuela"
              className="external-link"
            >
              BCV
            </a>
            . However, at the start of <span className="mono">2020</span> I had
            some free time in my hands, I wanted to{' '}
            <span className="bold">explore</span> something else than
            spreadsheets and such. I had <span className="mono">Python</span>{' '}
            and <span className="mono">Linux</span> in mind, so why not?
          </p>
          <p className="text">
            Fast-forward to today, I've had the joy of learning many things in
            regards to <span className="bold">Software Development</span>,{' '}
            <span className="bold">System Administration</span> and{' '}
            <span className="bold">Networking</span>. I might not be an expert
            on any of those, but I'm proud to say that I've had the privilege of
            collaborating with engineers from{' '}
            <a href="https://www.cisco.com/" className="external-link">
              Cisco
            </a>
            ,{' '}
            <a href="https://www.redhat.com/en" className="external-link">
              Red Hat
            </a>{' '}
            and{' '}
            <a href="https://www.oracle.com/" className="external-link">
              Oracle
            </a>
            . You wouldn't imagine, it turns out that what I'm most passionate
            about is <span className="bold">Front-end Web Development!</span>
          </p>
        </div>
        <LangSphere />
      </motion.div>
    </section>
  );
};

export default WhoAmI;
