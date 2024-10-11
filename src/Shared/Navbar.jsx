import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import {
  ClockSvg,
  EmailSvg,
  FacebookSvg,
  LinkedinSvg,
  PhoneSvg,
  TwitterSvg,
} from '../Components/SvgContainer';
const Navbar = () => {
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
      path: '/blog',
    },
  ];
  return (
    <div className="font-poppins">
      {/* top part */}
      <div className="bg-black ">
        <div className="container mx-auto py-5 flex items-center justify-between text-white">
          <div className="flex items-center h-full gap-5">
            <a target="_blank" href="https://www.linkedin.com/">
              <LinkedinSvg />
            </a>
            <a target="_blank" href="https://x.com/">
              <TwitterSvg />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookSvg />
            </a>
          </div>
          <div className="flex items-center gap-8">
            <a href="tel:000 1556 5864" className="flex items-center gap-2">
              <PhoneSvg />
              000 1556 5864
            </a>
            <a href="mailto:000 1556 5864" className="flex items-center gap-2">
              <EmailSvg />
              vgs@example.com
            </a>
            <p className="flex items-center gap-2">
              <ClockSvg />
              Mon-Fri 8.00 - 18.00
            </p>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="h-16  ">
            <Link to="/">
              <img className="h-full w-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="flex items-center gap-10">
            {navLinks?.map((navLink) => (
              <NavLink
                key={navLink?.title}
                to={navLink?.path}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive ? 'font-medium text-lg' : 'text-[#5A5C5F]'
                  }`
                }
              >
                {navLink?.title}
              </NavLink>
            ))}
          </div>
          <div>
            <Link to="/contact-us">
              <button className="bg-primary border border-primary hover:bg-transparent hover:text-primary duration-500 transition px-8 py-3 text-lg text-white rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
