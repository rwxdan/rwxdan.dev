import { motion } from 'framer-motion';
import './hero.css';
import { Me } from '../../assets/images';
const Hero = () => {
  const isMobile = window.innerWidth < 800;
  let variants;
  let childVariants;
  !isMobile
    ? ((variants = {
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 2,
          },
        },
      }),
      (childVariants = {
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            delay: 2.8,
          },
        },
      }))
    : '';
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, World!</p>
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            className="title"
          >
            I'm <br className="break" />{' '}
            <span className="name">Daniel Castro</span>
          </motion.h1>
          <motion.div
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="sub-title">
              I build things for the client-side of the Web.
            </h2>
            <p className="intro">
              A.K.A <span className="username">rwxdan</span>. I'm a Front-end
              advocate devoted to create Web Applications that are both
              functional and aesthetically pleasing.{' '}
              <span className="status">
                I'm currently looking for new opportunities!
              </span>
            </p>
          </motion.div>
        </div>
        <div className="image-box">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="wrapper"
          >
            <div className="image-wrapper">
              <div className="background"></div>
              <img src={Me} alt="Daniel Castro" className="profile" />
            </div>
            <div className="tag-box">
              <p className="tag">It's me, rwxdan!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
