import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';

const About = () => {
  return (
    <section
      aria-labelledby="about-us-heading"
      className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 container mx-auto px-5 md:px-7"
    >
      <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
        <div className="md:w-1/2 font-poppins flex flex-col gap-2">
          <h2
            data-aos="fade-right"
            data-aos-duration="1200"
            id="about-us-heading"
            className="text-primaryColor font-semibold md:text-lg"
          >
            About Us
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-duration="1300"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:w-[85%] leading-[1.2]"
          >
            Simplifying Global Sourcing <br className="hidden lg:block" /> for
            Your
            <span className="text-primaryColor ml-2">Business Success</span>
          </h3>
          <p
            data-aos="fade-right"
            data-aos-duration="1400"
            className="text-textColor lg:w-3/4 lg:pt-3 text-sm md:text-base"
          >
            Navigating international business is challenging with cultural
            differences and regulations. VGS simplifies sourcing, connecting you
            with reliable suppliers, so you can focus on growing your business
            globally.
          </p>
          <Link
            data-aos="fade-right"
            data-aos-duration="1500"
            to="/about-us"
            aria-label="Learn more about VGS and how we simplify global sourcing for business success"
            className="pt-2 md:pt-4 lg:pt-6"
          >
            <PrimaryButton
              title={'Learn More'}
              mobile={true}
              universal={true}
            />
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="md:w-1/2 flex"
        >
          <div className="w-full h-full">
            <img
              className="rounded-xl w-full h-full object-cover"
              src="https://img.freepik.com/premium-photo/asian-office-workers-office-discussing-working-together-concord_31965-156314.jpg"
              alt="Asian office workers discussing business in a collaborative environment"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
