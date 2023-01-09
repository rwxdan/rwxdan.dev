import icon from '../../assets/icon_logo.svg';
import './loading_effect.css';
const LoadingEffect = () => {
  return (
    <div className="loading">
      <div className="acme">
        <img src={icon} alt="rwxdan.dev" className="icon" />
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default LoadingEffect;
