import { useState, useEffect } from 'react';
import {
  LoadingEffect,
  Nav,
  AnchorLinks,
  AnchorMail,
  Hero,
  WhoAmI,
  Projects,
  Contact,
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
    <main>
      {Loading ? (
        <LoadingEffect />
      ) : (
        <div>
          <Nav />
          <AnchorLinks />
          <AnchorMail />
          <Hero />
          <WhoAmI />
          <Projects />
          <Contact />
          <Footer />
          <AnalyticsComponent />
        </div>
      )}
    </main>
  );
};

export default App;
