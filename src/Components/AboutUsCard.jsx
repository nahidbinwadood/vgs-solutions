/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import SecondaryButton from './SecondaryButton';

const AboutUsCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 md:flex-row xl:gap-16 shadow-[6px_6px_32px_0px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden p-4 xl:p-8">
      <div className="md:w-1/2">
        <div className="h-[200px] sm:h-[250px]  md:h-full xl:h-[400px]">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-5 lg:gap-16">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <p className="text-textColor text-sm lg:text-base leading-relaxed lg:leading-loose tracking-normal mt-3 md:mt-5">
            {description}
          </p>
        </div>
        <Link to="/contact-us">
          <SecondaryButton title={'Contact Us'} universal={true} />
        </Link>
      </div>
    </div>
  );
};

export default AboutUsCard;
