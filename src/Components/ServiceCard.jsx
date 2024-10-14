import { Link } from 'react-router-dom';
import SecondaryButton from './SecondaryButton';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-xl p-4 md:p-6 bg-white shadow-[6px_6px_32px_0px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-2 md:gap-4">
        <h4 className="text-xl md:text-2xl font-semibold">{title}</h4>
        <p className="text-sm md:text-base text-textColor lg:w-4/5 md:h-[110px] lg:h-[90px] xl:h-auto pb-2">{description}</p>
        <Link to='/contact-us'  >
          <SecondaryButton title={'Contact Now'} universal={true} />
        </Link>
      </div>
      <div className="mt-5 sm:mt-6 md:mt-8">
        <div className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] w-full">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
