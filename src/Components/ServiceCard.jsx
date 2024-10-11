import { Link } from 'react-router-dom';
import SecondaryButton from './SecondaryButton';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="rounded-xl p-6 bg-white">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-textColor w-4/5 h-[70px]">{description}</p>
        <Link to='/contact-us'  >
          <SecondaryButton title={'Contact Now'} />
        </Link>
      </div>
      <div className="mt-8">
        <div className="h-[320px] w-full">
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
