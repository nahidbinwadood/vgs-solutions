import { Helmet } from 'react-helmet';
import Hero from './Sections/Hero';
import AboutUs from '../About Us/AboutUs';
import Sponsors from './Sections/Sponsors';
const Homepage = () => {

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>VGS Solutions | Homepage</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <Hero />
      <AboutUs />
      <Sponsors />
    </div>
  );
};

export default Homepage;
