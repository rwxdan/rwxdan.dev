import './hero.css';
import Me from '../../assets/images/me.png';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-box">
        <div className="text-box">
          <p className="hello-world">Hello, World!</p>
          <div>
            <h1 className="title">I'm Daniel Castro</h1>
            <h2 className="sub-title">
              I build things for the client-side of the Web.
            </h2>
          </div>
          <p className="intro">
            A.K.A <span className="username">rwxdan</span>. I'm a Front-end
            advocate devoted to create Web Applications that are both functional
            and aesthetically pleasing.{' '}
            <span className="status">
              I'm currently looking for new opportunities!
            </span>
          </p>
        </div>
        <div className="image-box">
          <div className="wrapper">
            <div className="image-wrapper">
              <div className="background"></div>
              <img src={Me} alt="Daniel Castro" className="profile" />
            </div>
            <div className="tag-box">
              <p className="tag">It's me, rwxdan!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
