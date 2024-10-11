import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';

const About = () => {
  return (
    <section className="py-20 container mx-auto flex items-center">
      <div className="w-1/2 h-full font-poppins  flex flex-col gap-2">
        <h2 className="text-primary font-semibold text-lg">About Us</h2>
        <h3 className="text-4xl font-semibold w-[85%] leading-[1.2] ">
          Simplifying Global Sourcing <br /> for Your
          <span className="text-primary ml-2">Business Success</span>
        </h3>
        <p className="text-textColor w-3/4 pt-3">
          Navigating international business is challenging with cultural
          differences and regulations. VGS simplifies sourcing, connecting you
          with reliable suppliers, so you can focus on growing your business
          globally.
        </p>
        <Link to="/about-us" className="pt-6">
          <PrimaryButton title={'Learn More'} />
        </Link>
      </div>
      <div className="w-1/2 h-full">
        <div className="h-full w-full">
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://img.freepik.com/premium-photo/asian-office-workers-office-discussing-working-together-concord_31965-156314.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
