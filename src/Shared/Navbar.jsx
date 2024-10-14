import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import PrimaryButton from '../Components/PrimaryButton';
import { MdMenuOpen } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import {
  ClockSvg,
  EmailSvg,
  FacebookSvg,
  LinkedinSvg,
  PhoneSvg,
  TwitterSvg,
} from '../Components/SvgContainer';
import { useState } from 'react';
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
  ];
  return (
    <div className="font-poppins mx-5 md:mx-7">
      {/* top part */}
      <div className="bg-black hidden">
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
      <div className="container mx-auto ">
        <div className="flex items-center justify-between py-4">
          <div className="h-6 sm:h-8 md:h-10 lg:h-16  ">
            <Link to="/">
              <img className="h-full w-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="items-center gap-10 hidden lg:flex">
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
          <div className="hidden lg:flex">
            <Link to="/contact-us">
              <PrimaryButton title={'Contact Us'} />
            </Link>
          </div>
          <div className="transition duration-500 lg:hidden">
            {!open && (
              <MdMenuOpen
                onClick={() => setOpen(!open)}
                className={`size-6 sm:size-7 md:size-8`}
              />
            )}
          </div>
        </div>
      </div>

      {/* sidebar */}
      <div
        className={`fixed right-0 top-0 lg:hidden bg-white z-20 h-full w-full transform overflow-y-scroll  transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-black/5 p-1 rounded-full absolute top-5 left-5 md:top-7 md:left-7">
          <IoCloseSharp
            onClick={() => setOpen(!open)}
            className="size-6 sm:size-7 md:size-8 "
          />
        </div>

        {/* NavLinks */}
        <div className="flex w-full items-center justify-center flex-col pt-20 gap-5 md:gap-6">
          {navLinks?.map((navLink) => (
            <NavLink
              key={navLink?.title}
              to={navLink?.path}
              onClick={() => setOpen(!open)}
              className={({ isActive }) =>
                `md:text-lg ${
                  isActive ? 'font-medium md:text-lg' : 'text-[#5A5C5F]'
                }`
              }
            >
              {navLink?.title}
            </NavLink>
          ))}

          <Link to="/contact-us">
            <PrimaryButton title={'Contact Us'} mobile={true} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
