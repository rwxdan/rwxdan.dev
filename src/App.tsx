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
