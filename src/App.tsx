import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  LoadingEffect,
  Nav,
  AnchorLinks,
  AnchorMail,
  Hero,
  WhoAmI,
  Projects,
  Connect,
  Footer,
  AnalyticsComponent,
} from './components';
const App = () => {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="title" content="Daniel Castro" />
        <meta
          name="description"
          content="Daniel Castro is a Frontend Web developer devoted to create Web Applications that are both functional and aesthetically pleasing"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, TailwindCSS, SCSS, TypeScript, Vite, Portfolio, Developer, Frontend, Front-end, Webdev, rwxdan, web"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Daniel Castro" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="icon" sizes="24x24" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Roboto:wght@400;500;700&family=Work+Sans:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {Loading ? (
        <LoadingEffect />
      ) : (
        <div>
          <Nav />
          <main>
            <AnchorLinks />
            <AnchorMail />
            <Hero />
            <WhoAmI />
            <Projects />
            <Connect />
            <Footer />
            <AnalyticsComponent />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
