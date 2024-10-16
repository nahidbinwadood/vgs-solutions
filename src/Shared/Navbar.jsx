import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { MdMenuOpen } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import PrimaryButton from '../Components/PrimaryButton';
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
  ];
  return (
    <header className="font-poppins overflow-x-hidden">
      {/* Main navigation */}
      <nav className="container mx-auto" aria-label="Main navigation">
        <div className="flex items-center justify-between py-6 px-5 md:px-7">
          {/* Logo */}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="h-6 sm:h-8 md:h-10 lg:h-16"
          >
            <Link to="/" aria-label="Go to homepage">
              <img
                className="h-full w-full"
                src={logo}
                alt="VGS - Your Trusted Partner"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div
            data-aos="zoom-out"
            data-aos-duration="1100"
            className="items-center gap-10 hidden lg:flex"
          >
            {navLinks?.map((navLink) => (
              <NavLink
                key={navLink?.title}
                to={navLink?.path}
                aria-label={`Navigate to ${navLink?.title}`}
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

          {/* Contact Us button (Desktop) */}
          <div
            data-aos="fade-left"
            data-aos-duration="1300"
            className="hidden lg:flex"
          >
            <Link to="/contact-us" aria-label="Go to contact us page">
              <PrimaryButton title={'Contact Us'} />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="transition duration-500 lg:hidden"
          >
            {!open && (
              <MdMenuOpen
                onClick={() => setOpen(!open)}
                className={`size-6 sm:size-7 md:size-8`}
                aria-label="Open mobile menu"
              />
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed right-0 top-0 lg:hidden bg-white z-20 h-full w-full transform overflow-y-scroll transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="bg-black/5 p-1 rounded-full absolute top-5 left-5 md:top-7 md:left-7">
          <IoCloseSharp
            onClick={() => setOpen(!open)}
            className="size-6 sm:size-7 md:size-8"
            aria-label="Close mobile menu"
          />
        </div>

        {/* Mobile NavLinks */}
        <nav
          className="flex w-full items-center justify-center flex-col pt-20 gap-5 md:gap-6"
          aria-label="Mobile navigation"
        >
          {navLinks?.map((navLink) => (
            <NavLink
              key={navLink?.title}
              to={navLink?.path}
              onClick={() => setOpen(!open)}
              aria-label={`Navigate to ${navLink?.title}`}
              className={({ isActive }) =>
                `md:text-lg ${
                  isActive ? 'font-medium md:text-lg' : 'text-[#5A5C5F]'
                }`
              }
            >
              {navLink?.title}
            </NavLink>
          ))}

          <Link
            to="/contact-us"
            onClick={() => setOpen(!open)}
            aria-label="Go to contact us page"
          >
            <PrimaryButton title={'Contact Us'} mobile={true} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
