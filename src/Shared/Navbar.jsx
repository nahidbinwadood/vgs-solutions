import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <div className="font-poppins">
      {/* top part */}
      <div className="bg-black ">
        <div className="container mx-auto py-5 flex items-center justify-between text-white">
          <div className="flex items-center h-full gap-5">
            <a target="_blank" href="https://www.linkedin.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.47165 3.2141C5.47165 4.29884 4.5266 5.1782 3.36082 5.1782C2.19505 5.1782 1.25 4.29884 1.25 3.2141C1.25 2.12936 2.19505 1.25 3.36082 1.25C4.5266 1.25 5.47165 2.12936 5.47165 3.2141Z"
                  fill="white"
                />
                <path
                  d="M1.53866 6.6219H5.14691V17.5H1.53866V6.6219Z"
                  fill="white"
                />
                <path
                  d="M10.9562 6.6219H7.34794V17.5H10.9562C10.9562 17.5 10.9562 14.0754 10.9562 11.9342C10.9562 10.649 11.3973 9.35821 13.1572 9.35821C15.1462 9.35821 15.1342 11.0401 15.1249 12.3431C15.1128 14.0462 15.1418 15.7843 15.1418 17.5H18.75V11.7588C18.7194 8.09285 17.7593 6.40367 14.6005 6.40367C12.7246 6.40367 11.5618 7.25096 10.9562 8.01754V6.6219Z"
                  fill="white"
                />
              </svg>
            </a>
            <a target="_blank" href="https://x.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.6774 8.62177L18.2342 1H16.6805L10.9872 7.61788L6.43998 1H1.19531L8.07159 11.0074L1.19531 19H2.74916L8.76141 12.0113L13.5636 19H18.8083L11.677 8.62177H11.6774ZM9.54921 11.0956L8.8525 10.0991L3.30903 2.16971H5.69564L10.1693 8.56895L10.866 9.56546L16.6812 17.8835H14.2946L9.54921 11.096V11.0956Z"
                  fill="white"
                />
              </svg>
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.5995 5.31137L10.6562 8.24488L13.6373 8.2051C13.8526 8.2051 14.0113 8.37415 13.9773 8.55314L13.5806 10.4525C13.5466 10.5917 13.4106 10.6911 13.2519 10.7011L10.7015 10.7408L10.8375 17.9503L7.43702 18L7.30101 10.7906L5.37404 10.8204C5.18134 10.8204 5.034 10.6911 5.034 10.5221L5 8.6327C5 8.46365 5.14734 8.33437 5.34004 8.33437L7.267 8.30454L7.21031 5.07272C7.1763 3.422 8.67254 2.06961 10.5541 2.03978L13.6146 2C13.8073 2 13.9546 2.12928 13.9546 2.29832L14 4.6849C14 4.85395 13.8526 4.98322 13.6599 4.98322L10.9395 5.023C10.7468 5.01305 10.5995 5.15227 10.5995 5.31137Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3083 15.2753C18.3083 15.5753 18.2416 15.8837 18.1 16.1837C17.9583 16.4837 17.775 16.767 17.5333 17.0337C17.125 17.4837 16.675 17.8087 16.1666 18.017C15.6666 18.2253 15.125 18.3337 14.5416 18.3337C13.6916 18.3337 12.7833 18.1337 11.825 17.7253C10.8666 17.317 9.90829 16.767 8.95829 16.0753C7.99996 15.3753 7.09163 14.6003 6.22496 13.742C5.36663 12.8753 4.59163 11.967 3.89996 11.017C3.21663 10.067 2.66663 9.11699 2.26663 8.17533C1.86663 7.22533 1.66663 6.31699 1.66663 5.45033C1.66663 4.88366 1.76663 4.34199 1.96663 3.84199C2.16663 3.33366 2.48329 2.86699 2.92496 2.45033C3.45829 1.92533 4.04163 1.66699 4.65829 1.66699C4.89163 1.66699 5.12496 1.71699 5.33329 1.81699C5.54996 1.91699 5.74163 2.06699 5.89163 2.28366L7.82496 5.00866C7.97496 5.21699 8.08329 5.40866 8.15829 5.59199C8.23329 5.76699 8.27496 5.94199 8.27496 6.10033C8.27496 6.30033 8.21663 6.50033 8.09996 6.69199C7.99163 6.88366 7.83329 7.08366 7.63329 7.28366L6.99996 7.94199C6.90829 8.03366 6.86663 8.14199 6.86663 8.27533C6.86663 8.34199 6.87496 8.40033 6.89163 8.46699C6.91663 8.53366 6.94163 8.58366 6.95829 8.63366C7.10829 8.90866 7.36663 9.26699 7.73329 9.70033C8.10829 10.1337 8.50829 10.5753 8.94163 11.017C9.39163 11.4587 9.82496 11.867 10.2666 12.242C10.7 12.6087 11.0583 12.8587 11.3416 13.0087C11.3833 13.0253 11.4333 13.0503 11.4916 13.0753C11.5583 13.1003 11.625 13.1087 11.7 13.1087C11.8416 13.1087 11.95 13.0587 12.0416 12.967L12.675 12.342C12.8833 12.1337 13.0833 11.9753 13.275 11.8753C13.4666 11.7587 13.6583 11.7003 13.8666 11.7003C14.025 11.7003 14.1916 11.7337 14.375 11.8087C14.5583 11.8837 14.75 11.992 14.9583 12.1337L17.7166 14.092C17.9333 14.242 18.0833 14.417 18.175 14.6253C18.2583 14.8337 18.3083 15.042 18.3083 15.2753Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <div>
                <a href="tel:000 1556 5864">000 1556 5864</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M1.66663 7.08366C1.66663 4.16699 3.33329 2.91699 5.83329 2.91699H14.1666C16.6666 2.91699 18.3333 4.16699 18.3333 7.08366V12.917C18.3333 15.8337 16.6666 17.0837 14.1666 17.0837H5.83329"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1667 7.5L11.5584 9.58333C10.7 10.2667 9.2917 10.2667 8.43337 9.58333L5.83337 7.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.66663 13.75H6.66663"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.66663 10.417H4.16663"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <a href="mailto:000 1556 5864">vgs@example.com</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3333 10.0003C18.3333 14.6003 14.6 18.3337 9.99996 18.3337C5.39996 18.3337 1.66663 14.6003 1.66663 10.0003C1.66663 5.40033 5.39996 1.66699 9.99996 1.66699C14.6 1.66699 18.3333 5.40033 18.3333 10.0003Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.0917 12.6505L10.5083 11.1088C10.0583 10.8421 9.69165 10.2005 9.69165 9.67546V6.25879"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p>Mon-Fri 8.00 - 18.00</p>
              </div>
            </div>
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
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
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
