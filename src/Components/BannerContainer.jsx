/* eslint-disable react/prop-types */
import bannerImage from '../assets/banner-image.jpg';

const BannerContainer = ({title}) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.6), rgba(0, 25, 29, 0.6)), url(${bannerImage})`,
      }}
      className="h-[500px] bg-cover bg-center bg-no-repeat text-white font-poppins flex w-full items-center justify-center text-center"
    >
      <div>
        <h1 className="text-6xl font-bold">{title}</h1>
        <div className="flex items-center gap-3 justify-center mt-5">
          <h4 className="text-lg">Home</h4>
          <div className="h-4 w-[2px] bg-white"></div>
          <h4 className="text-lg">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default BannerContainer;
