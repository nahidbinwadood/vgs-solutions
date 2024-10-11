import About from './Sections/About';
import Choose from './Sections/Choose';
import Hero from './Sections/Hero';
import Services from './Sections/Services';
import Sponsors from './Sections/Sponsors';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <Services />
      <Choose />
    </>
  );
};

export default Homepage;
