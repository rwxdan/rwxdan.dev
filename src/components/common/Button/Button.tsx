import './button.css';

interface Props {
  title: string;
  link: string;
}
const GetInTouch = ({ title, link }: Props) => {
  return (
    <div className="btn-box">
      <a href={link} className="btn">
        {title}
      </a>
    </div>
  );
};

export default GetInTouch;
