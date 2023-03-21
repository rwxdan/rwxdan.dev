import { Nav, AnchorLinks, AnchorMail, Hero, WhoAmI, Projects, Connect, Footer } from '@/components';
const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
