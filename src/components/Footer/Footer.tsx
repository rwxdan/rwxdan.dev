import './footer.css';
const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="text">
          Daniel Castro {date.getFullYear} —{' '}
          <a target="_blank" href="https://github.com/rwxdan/rwxdan.dev" className="external-link">
            Designed & Coded by rwxdan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
