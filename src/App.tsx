import { useState, useEffect } from 'react';
import { LoadingEffect, Nav, AnchorLinks, AnchorMail, Hero, WhoAmI, Projects, Connect, Footer } from '@/components';
const App = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {Loading ? (
        <LoadingEffect />
      ) : (
        <div>
          <Nav />
          <main>
            <Hero />
            <Projects />
            <Connect />
            <WhoAmI />
            <AnchorLinks />
            <AnchorMail />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
