import About from './Sections/About';
import Choose from './Sections/Choose';
import Hero from './Sections/Hero';
import News from './Sections/News';
import Services from './Sections/Services';
import Sponsors from './Sections/Sponsors';

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Sponsors />
      <About />
      <Services />
      <Choose />
      <News />
    </div>
  );
};

export default Homepage;
