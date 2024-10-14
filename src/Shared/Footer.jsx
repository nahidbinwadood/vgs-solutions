import { Link, useLocation } from 'react-router-dom';
import footerBg from '../assets/footer-bg.jpg';
import PrimaryButton from '../Components/PrimaryButton';
import {
  EmailSvg,
  FacebookSvg,
  LinkedinSvg,
  LogoSvg,
  PhoneSvg,
  TwitterSvg,
} from '../Components/SvgContainer';
const Footer = () => {
  const socialMedia = {
    linkedin: {
      url: 'https://www.linkedin.com',
      icon: <LinkedinSvg />,
    },
    facebook: {
      url: 'https://www.facebook.com',
      icon: <FacebookSvg />,
    },
    twitter: {
      url: 'https://www.twitter.com',
      icon: <TwitterSvg />,
    },
  };
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About Us',
      path: '/about-us',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Blog',
      path: '/blogs',
    },
    {
      title: 'Contact',
      path: '/contact-us',
    },
  ];

  const location = useLocation();
  const isContactPage = location.pathname === '/contact-us';
  return (
    <div className="font-poppins">
      {/* Footer Top */}
      {isContactPage ? (
        <section className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-primaryBg font-poppins flex w-full items-center justify-center text-center">
          <div className="flex flex-col gap-10 w-full container mx-auto">
            <div>
              <h3 className="text-4xl font-semibold text">Follow us</h3>
              <div className="flex items-center gap-32 justify-center mt-12 w-full">
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="p-4 w-fit bg-primaryColor rounded-full"
                  >
                    <LinkedinSvg />
                  </a>
                  <div>
                    <p className="font-medium">VGS International Corporation</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    className="p-4 w-fit bg-primaryColor rounded-full"
                  >
                    <TwitterSvg />
                  </a>
                  <div>
                    <p className="font-medium">VGS International Corporation</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="p-4 w-fit bg-primaryColor rounded-full"
                  >
                    <FacebookSvg />
                  </a>
                  <div>
                    <p className="font-medium">VGS International Corporation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url(${footerBg})`,
          }}
          className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat text-white font-poppins flex w-full items-center justify-center text-center px-5 md:px-7"
        >
          <div className="flex flex-col gap-5 lg:gap-10 items-center justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-2/3 mx-auto font-semibold leading-snug md:leading-normal lg:leading-tight xl:leading-tight">
              Discovering the right product for your business with our valuable
              sourcing solution
            </h3>
            <div className="w-fit items-center justify-center">
              <Link to="/contact-us">
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

      {/* main footer */}
      <section className=" bg-secondaryBg pt-10 sm:pt-12 md:pt-16 lg:pt-20 text-white">
        <div className="flex justify-between container mx-auto gap-7 px-5 md:px-7 flex-wrap">
          {/* Logo Section */}
          <div>
            <div className="mb-2 md:mb-4">
              <LogoSvg />
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="md:text-lg font-semibold">
                VGS International Corporation Co. Ltd.
              </p>
              <p className="md:text-lg">Longbow House 20 Chiswell Street,</p>
              <p className="md:text-lg">London FCTY 4TW</p>
            </div>
            <div className="mt-3 md:mt-5 flex items-center gap-3">
              {Object.values(socialMedia).map((media) => (
                <Link
                  key={media?.url}
                  to={media?.url}
                  className="p-2 border border-white hover:bg-primaryColor hover:border-primaryColor transition duration-300 rounded-full inline-block cursor-pointer"
                >
                  {media?.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* NavLinks */}
          <div>
            <h4 className="md:text-xl font-semibold mb-3 md:mb-4">Menu</h4>
            <div className="flex flex-col gap-3">
              {navLinks?.map((link) => (
                <Link key={link?.path} to={link?.path} className='text-sm md:text-base'>
                  {link?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="md:text-xl font-semibold mb-3 md:mb-4">Contact us</h4>
            <div className="space-y-3">
              <a href="tel:000 1556 5864" className="flex items-center gap-3 text-sm md:text-base">
                <PhoneSvg />
                000 1556 5864
              </a>
              <a
                href="mailto:000 1556 5864"
                className="flex items-center gap-3 text-sm md:text-base"
              >
                <EmailSvg />
                vgs@example.com
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="md:text-xl font-semibold mb-3 md:mb-4">Subscribe Form</h4>
            <div>
              <h5 className='text-sm md:text-base'>Email</h5>
              <div>
                <form action="">
                  <div className="flex flex-wrap md:flex-row md:items-center gap-3 mt-2">
                    <div className="flex items-center overflow-hidden">
                      <input
                        className="rounded-md py-2 h-10 w-full md:w-[250px]  focus:outline-none px-4 text-black text-sm"
                        type="email"
                        name="email"
                        id=""
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primaryColor flex items-center justify-center h-10 border text-sm border-primaryColor hover:bg-transparent hover:border-white  duration-500 transition px-5 text-white rounded-md w-fit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <div className="py-3 md:py-4">
                  <p className="leading-[1.6] text-sm md:text-base">
                    Subscribe to our newsletter. Be always in <br className='hidden md:block' /> trend!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="py-7 md:py-8 lg:py-10 mt-12 xl:mt-24 bg-secondaryBg text-white border-t border-white container mx-auto">
          <p className="text-center text-sm md:text-base">
            © All rights reserved. • VGS International Corporation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
