import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="text">
          Daniel Castro 2023 —{' '}
          <a
            target="_blank"
            href="https://github.com/rwxdan/portfolio"
            className="external-link"
          >
            Designed & Coded by rwxdan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
