import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Blogr, Hoobank, Manage, TipCalculator } from '../../assets/images';

import github from '../../assets/icons/github.svg';
import share from '../../assets/icons/share.svg';
import './projects.css';

const Projects = () => {
  const isMobile = window.innerWidth < 800;
  let variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  let row;
  let rowReverse;
  !isMobile
    ? ((row = {
        left: {
          x: -100,
        },
        right: {
          x: 0,
          transition: {
            delay: 0.05,
          },
        },
      }),
      (rowReverse = {
        right: {
          x: 100,
        },
        left: {
          x: 0,
          transition: {
            delay: 0.05,
          },
        },
      }))
    : '';
  const scrollRef = useRef(null);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      id="projects"
      className="projects"
    >
      <h3 className="title">Projects</h3>
      <h4 className="sub-title">Take a look at some of my builds</h4>
      <div className="projects-box">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef, once: true }}
          className="sample-box"
        >
          <div className="text-box">
            <h5 className="project-title">Blogr Landing Page</h5>
            <p className="project-info">
              A landing page for a fictional platform. The assets, design and
              guidelines were provided by{' '}
              <a
                target="_blank"
                href="https://www.frontendmentor.io"
                className="reference"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <ul className="stack">
              <li className="item">PostCSS</li>
              <li className="item">React</li>
              <li className="item">TailwindCSS</li>
              <li className="item">Vite</li>
            </ul>
            <div className="external-links">
              <a
                target="_blank"
                href="https://github.com/rwxdan/blogr-landing-page"
                className="link"
              >
                <img src={github} alt="GitHub repo." className="icon" />
              </a>
              <a
                target="_blank"
                href="https://rwxdan-blogr-lp.netlify.app/"
                className="link"
              >
                <img src={share} alt="Live preview" className="icon" />
              </a>
            </div>
          </div>
          <motion.div
            variants={row}
            initial="left"
            whileInView="right"
            viewport={{ root: scrollRef, once: true }}
            className="image-box"
          >
            <img src={Blogr} alt="Blogr screenshots" className="sample" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef, once: true }}
          className="sample-box"
        >
          <div className="text-box">
            <h5 className="project-title">HooBank</h5>
            <p className="project-info">
              HooBank is a landing page whose gorgeous design was created by{' '}
              <a
                target="_blank"
                href="https://github.com/adrianhajdin"
                className="reference"
              >
                @adrianhajdin
              </a>{' '}
              and completed by their community over at{' '}
              <a
                href="https://www.figma.com/file/bUGIPys15E78w9bs1l4tgS/HooBank?node-id=310%3A485&t=x9rw6TaVJ0bWystQ-1"
                className="reference"
              >
                Figma
              </a>
              . This build gave me a much-needed understanding of gradients and
              blur, and it's also one of my first projects using TailwindCSS.
            </p>
            <ul className="stack">
              <li className="item">PostCSS</li>
              <li className="item">React</li>
              <li className="item">TailwindCSS</li>
              <li className="item">Vite</li>
            </ul>
            <div className="external-links">
              <a
                target="_blank"
                href="https://github.com/rwxdan/hoobank"
                className="link"
              >
                <img src={github} alt="GitHub repo." className="icon" />
              </a>
              <a
                target="_blank"
                href="https://hoobank-rwxdan.vercel.app/"
                className="link"
              >
                <img src={share} alt="Live preview" className="icon" />
              </a>
            </div>
          </div>
          <motion.div
            variants={rowReverse}
            initial="right"
            whileInView="left"
            viewport={{ root: scrollRef, once: true }}
            className="image-box"
          >
            <img src={Hoobank} alt="HooBank screenshots" className="sample" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef, once: true }}
          className="sample-box"
        >
          <div className="text-box">
            <h5 className="project-title">Manage Landing Page</h5>
            <p className="project-info">
              Manage is one of the most fun builds I've coded so far. This SPA
              has a relatively complex layout and its responsiveness was a real
              challenge. The assets, design and guidelines were provided by{' '}
              <a
                target="_blank"
                href="https://www.frontendmentor.io"
                className="reference"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <ul className="stack">
              <li className="item">PostCSS</li>
              <li className="item">React</li>
              <li className="item">Framer Motion</li>
              <li className="item">Vite</li>
            </ul>
            <div className="external-links">
              <a
                target="_blank"
                href="https://github.com/rwxdan/manage-landing-page"
                className="link"
              >
                <img src={github} alt="GitHub repo." className="icon" />
              </a>
              <a
                target="_blank"
                href="https://manage-landing-page-rwxdan.vercel.app/"
                className="link"
              >
                <img src={share} alt="Live preview" className="icon" />
              </a>
            </div>
          </div>
          <motion.div
            variants={row}
            initial="left"
            whileInView="right"
            viewport={{ root: scrollRef, once: true }}
            className="image-box"
          >
            <img src={Manage} alt="Manage screenshots" className="sample" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef, once: true }}
          className="sample-box"
        >
          <div className="text-box">
            <h5 className="project-title">Tip Calculator App</h5>
            <p className="project-info">
              Supose that you're on a restaurant with some friends and you want
              to calculate the amount of money by tip percentage that each one
              has to pay, plus the bill amount. Tip Calculator lets you easily
              do that! The assets, design and guidelines were provided by{' '}
              <a
                target="_blank"
                href="https://www.frontendmentor.io"
                className="reference"
              >
                Frontend Mentor
              </a>
              .
            </p>
            <ul className="stack">
              <li className="item">HTML</li>
              <li className="item">JavaScript</li>
              <li className="item">SCSS</li>
            </ul>
            <div className="external-links">
              <a
                target="_blank"
                href="https://github.com/rwxdan/tip-calculator-app"
                className="link"
              >
                <img src={github} alt="GitHub repo." className="icon" />
              </a>
              <a
                target="_blank"
                href="https://rwxdan.github.io/tip-calculator-app"
                className="link"
              >
                <img src={share} alt="Live preview" className="icon" />
              </a>
            </div>
          </div>
          <motion.div
            variants={rowReverse}
            initial="right"
            whileInView="left"
            viewport={{ root: scrollRef, once: true }}
            className="image-box"
          >
            <img
              src={TipCalculator}
              alt="Tip Calculator screenshots"
              className="sample"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
