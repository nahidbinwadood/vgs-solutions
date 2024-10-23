import { Link, useLocation } from 'react-router-dom';
import footerBg from '../assets/footer-bg.jpg';
import PrimaryButton from '../Components/PrimaryButton';
import { EmailSvg, LogoSvg } from '../Components/SvgContainer';
const Footer = () => {
  const navLinks = [
    {
      title: 'About Us',
      path: '/',
    },

    {
      title: 'Your Expectations of Us',
      path: '/expectations',
    },
    {
      title: 'Trusting Us',
      path: '/trusting-us',
    },
    {
      title: 'Contact',
      path: '/contact-us',
    },
  ];

  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';
  return (
    <footer className="font-poppins overflow-x-hidden">
      {/* Footer Top */}
      {isContactPage ? (
        ''
      ) : (
        <section
          aria-labelledby="discover"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url(${footerBg})`,
          }}
          className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat text-white font-poppins flex w-full items-center justify-center text-center px-5 md:px-7"
        >
          <div className="flex flex-col gap-5 lg:gap-10 items-center justify-center">
            <h2
              data-aos="zoom-in"
              data-aos-duration={1300}
              id="discover"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-2/3 mx-auto font-semibold leading-snug md:leading-normal lg:leading-tight xl:leading-tight"
            >
              Discovering the right product for your business with our valuable
              sourcing solution
            </h2>
            <div
              data-aos="zoom-in"
              data-aos-duration={1500}
              className="w-fit items-center justify-center"
            >
              <Link to="/contact-us" aria-label="Contact us page">
                <PrimaryButton
                  title={'Contact Us'}
                  variant={true}
                  universal={true}
                  mobile={true}
                />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer */}
      <section className="bg-secondaryBg pt-10 sm:pt-12 md:pt-16 lg:pt-20 text-white">
        <div className="flex justify-between container mx-auto gap-7 px-5 md:px-7 flex-wrap">
          {/* Logo Section */}
          <div>
            <div
              data-aos="fade-right"
              data-aos-duration={1200}
              className="mb-2 md:mb-4"
            >
              <LogoSvg alt="VGS International Corporation Logo" />
            </div>
            <address className="not-italic space-y-1 md:space-y-2">
              <p
                data-aos="fade-right"
                data-aos-duration={1300}
                className="md:text-lg font-semibold"
              >
                VGS THAI CO. LTD.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration={1400}
                className="md:text-lg w-full md:w-2/3"
              >
                571 RSU Building, 9th Floor, Sukhumvit 31, Klong Tan Nuea ,
                Wattana, Bangkok 10110. Thailand
              </p>
            </address>
          </div>

          {/* NavLinks */}
          <nav aria-labelledby="footer-menu" className="flex flex-col">
            <h3
              data-aos="fade-right"
              data-aos-duration={1300}
              id="footer-menu"
              className="md:text-xl font-semibold mb-3 md:mb-4"
            >
              Menu
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks?.map((link, idx) => (
                <Link
                  data-aos="fade-right"
                  data-aos-duration={1200 + idx * 100}
                  key={link?.path}
                  to={link?.path}
                  aria-label={`Navigate to ${link?.title}`}
                  className="text-sm md:text-base"
                >
                  {link?.title}
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact Info */}
          <div>
            <h3
              data-aos="fade-left"
              data-aos-duration={1200}
              className="md:text-xl font-semibold mb-3 md:mb-4"
            >
              Contact us
            </h3>
            <div className="space-y-3">
              <a
                data-aos="fade-left"
                data-aos-duration={1400}
                href="mailto: contact@vgsthai.com"
                className="flex items-center gap-3 text-sm md:text-base"
                aria-label="Email us"
              >
                <EmailSvg />
                contact@vgsthai.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-7 md:py-8 lg:py-10 mt-12 xl:mt-24 bg-secondaryBg text-white border-t border-white container mx-auto">
          <p className="text-center text-sm md:text-base">
            © All rights reserved. • VGS International Corporation
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
