/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import SecondaryButton from './SecondaryButton';

const AboutUsCard = ({ image, title, description }) => {
  return (
    <div className="flex gap-16 shadow-[6px_6px_32px_0px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden p-8">
      <div className="w-1/2">
        <div className="h-[370px]">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-16">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-textColor leading-[1.8] tracking-normal mt-5">
            {description}
          </p>
        </div>
        <Link to="/contact-us">
          <SecondaryButton title={'Contact Us'} />
        </Link>
      </div>
    </div>
  );
};

export default AboutUsCard;
