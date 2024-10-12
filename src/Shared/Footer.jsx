import { Link } from 'react-router-dom';
import footerBg from '../assets/footer-bg.jpg';
import PrimaryButton from '../Components/PrimaryButton';
import {
  FacebookSvg,
  LinkedinSvg,
  LogoSvg,
  TwitterSvg,
} from '../Components/SvgContainer';
const Footer = () => {
  return (
    <div>
      {/* Footer Top */}
      <section
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url(${footerBg})`,
        }}
        className="h-[500px] bg-cover bg-center bg-no-repeat text-white font-poppins flex w-full items-center justify-center text-center"
      >
        <div className="flex flex-col gap-10">
          <h3 className="text-5xl w-2/3 mx-auto font-semibold leading-[1.3]">
            Discovering the right product for your business with our valuable
            sourcing solution
          </h3>
          <Link to="/contact-us">
            <PrimaryButton title={'Contact Us'} />
          </Link>
        </div>
      </section>

      {/* main footer */}
      <section className=" bg-secondaryBg py-20 text-white">
        <div className="flex items-center justify-between container mx-auto">
          <div>
            <div className="mb-4">
              <LogoSvg />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium">
                VGS International Corporation Co. Ltd.
              </p>
              <p className="text-lg">Longbow House 20 Chiswell Street,</p>
              <p className="text-lg">London FCTY 4TW</p>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Link
                to="https://www.linkedin.com/"
                className="p-2 border border-white hover:bg-primaryColor hover:border-primaryColor transition duration-300 rounded-full inline-block cursor-pointer"
              >
                <LinkedinSvg />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                className="p-2 border border-white hover:bg-primaryColor hover:border-primaryColor transition duration-300 rounded-full inline-block cursor-pointer"
              >
                <TwitterSvg />
              </Link>
              <Link
                to="https://www.linkedin.com/"
                className="p-2 border border-white hover:bg-primaryColor hover:border-primaryColor transition duration-300 rounded-full inline-block cursor-pointer"
              >
                <FacebookSvg />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
