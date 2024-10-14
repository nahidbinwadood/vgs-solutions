/* eslint-disable react/prop-types */

const BannerContainer = ({ title, bannerImage, subTitle }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.6), rgba(0, 25, 29, 0.6)), url(${bannerImage})`,
      }}
      className="h-[200px] sm:h-[300px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat text-white font-poppins flex w-full items-center justify-center text-center"
      role="banner"
      aria-label={`${title} Banner`}
    >
      <div>
        <h1
          data-aos="zoom-in"
          data-aos-duration={1200}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        >
          {title}
        </h1>
        <nav aria-label="breadcrumb">
          <div className="flex items-center gap-3 justify-center mt-3 md:mt-5">
            <h4
              data-aos="zoom-in"
              data-aos-duration={1300}
              className="md:text-lg"
            >
              <a href="/" className="text-white">
                Home
              </a>
            </h4>
            <div data-aos="zoom-in"
              data-aos-duration={1250} className="h-3 md:h-4 w-[2px] bg-white"></div>
            <h4
              data-aos="zoom-in"
              data-aos-duration={1400}
              className="md:text-lg"
            >
              {subTitle}
            </h4>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BannerContainer;
