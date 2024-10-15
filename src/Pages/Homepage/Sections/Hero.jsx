import { Link } from 'react-router-dom';
import banner from '../../../assets/hero-banner.webp';
import { HeroSpinSvg, ReviewStarSvg } from './../../../Components/SvgContainer';
import PrimaryButton from '../../../Components/PrimaryButton';
const Hero = () => {
  const reviewImages = [
    {
      name: 'John Doe',
      image:
        'https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg',
    },
    {
      name: 'John Doe2',
      image:
        'https://images.rawpixel.com/image_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xOV9waG90b19vZl9hX2FzaWFuX2J1c2luZXNzbWFuX2lzb2xhdGVkX29uX2Ffd18yNjRjN2Y5ZS03ZDBiLTQ2ODgtYjkzOS01MjM3ZDExNGYxNDVfMS5qcGc.jpg',
    },
    {
      name: 'John Doe3',
      image:
        'https://st.depositphotos.com/1597387/1984/i/450/depositphotos_19841901-stock-photo-asian-young-business-man-close.jpg',
    },
    {
      name: 'John Doe4',
      image:
        'https://img.freepik.com/premium-photo/happy-asian-man-smiling-portrait-with-white-background-generative-ai_455711-5682.jpg?w=1380',
    },
  ];
  const text =
    'Top 5 Global Distribution • Over 45 Years of Experiences • 50 Global Networks • ';
  const repeatedText = text.repeat(2);
  return (
    <section
      aria-labelledby="welcome-heading"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url(${banner})`,
      }}
      className="2xl:h-[90vh] bg-cover bg-center bg-no-repeat text-white font-poppins"
    >
      <div className="container mx-auto xl:pt-32 px-5 md:px-7 py-10 sm:py-12 md:py-14 lg:py-20">
        <header className="uppercase">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1200"
            id="welcome-heading"
            className="text-2xl sm:text-3xl mb-2 md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug md:leading-tight"
          >
            Welcome to VGS,
          </h1>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-normal sm:leading-normal md:leading-snug lg:leading-tight 2xl:leading-tight"
          >
            Your Trusted Partner in Global <br /> Supply Chain Solutions
          </h2>
        </header>

        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="lg:w-2/3 pt-5 text-sm md:text-base lg:text-lg"
        >
          Experience seamless supply chain management with our expert solutions.
          We ensure cost savings, risk mitigation, and consistent quality
          through our global network of trusted suppliers.
        </p>

        <div className="flex lg:items-center justify-between pt-6 lg:pt-0">
          {/* Review Section */}
          <div className="">
            <div className="flex flex-col md:flex-row items-start lg:items-center gap-4 md:gap-8">
              <div className="flex items-center w-fit relative">
                {reviewImages?.map((review, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration={1000 + index * 100}
                    key={review?.name}
                    className="size-10 md:size-12 xl:size-14 -mr-3 md:-mr-4 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={review?.image}
                      alt={`${review?.name} Review Image`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div>
                {/* Stars and Review Information */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      data-aos="fade-left"
                      data-aos-duration={1200}
                      className="flex items-center md:gap-1"
                    >
                      {[...Array(5)].map((_, idx) => (
                        <ReviewStarSvg key={idx} />
                      ))}
                    </div>
                    <p
                      data-aos="fade-left"
                      data-aos-duration={1300}
                      className="text-sm md:text-base"
                    >
                      4.8
                    </p>
                  </div>
                  <div>
                    <div
                      data-aos="fade-left"
                      data-aos-duration={1400}
                      className="flex items-center gap-2"
                    >
                      <p className="text-sm md:text-base">from 100+</p>
                      <Link
                        to="/reviews"
                        className="underline text-sm md:text-base"
                        aria-label="Read our reviews"
                      >
                        reviews
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating Icon */}
          <div
            data-aos="fade-left"
            data-aos-duration={1300}
            className="relative size-32 md:size-40 lg:size-52 xl:size-64 flex items-center justify-center -mt-3 md:-mt-5 lg:mt-5"
          >
            <HeroSpinSvg />
            <div className="absolute inset-0 w-full h-full animate-spin-slow">
              <svg viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[0.4em] fill-white">
                  <textPath xlinkHref="#textPath" startOffset="0%">
                    {repeatedText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          data-aos="fade-right"
          data-aos-duration={1300}
          className="xl:-mt-12 mt-2"
        >
          <Link
            to="/contact-us"
            aria-label="Learn more about our global offices"
          >
            <PrimaryButton
              title={'Global Offices'}
              variant={true}
              mobile={true}
              universal={true}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
