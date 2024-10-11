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
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url(${banner})`,
      }}
      className="h-[100vh] bg-cover bg-center bg-no-repeat text-white font-poppins"
    >
      <div className="container mx-auto pt-32 ">
        <div className="uppercase">
          <h1 className="text-6xl leading-[1.2]">Welcome to VGS,</h1>
          <h1 className="text-6xl font-bold leading-[1.2]">
            Your Trusted partner in global <br /> supply chain solutions
          </h1>
        </div>
        <p className="w-2/3 pt-5">
          Experience seamless supply chain management with our expert solutions.
          We ensure cost savings, risk mitigation, and consistent quality
          through our global network of trusted suppliers.
        </p>

        <div className="flex items-center justify-between">
          {/* review */}
          <div className="mt-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center w-fit relative ">
                {reviewImages?.map((review) => (
                  <div
                    key={review?.name}
                    className="size-14 -mr-4 rounded-full border-2 border-white overflow-hidden"
                  >
                    <img
                      className="h-full w-full object-cover"
                      src={review?.image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div>
                {/* stars */}
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <ReviewStarSvg key={idx} />
                      ))}
                    </div>
                    <p>4.8</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p>from 100+</p>
                      <Link to="/" className="underline">
                        reviews
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-64 h-64 flex items-center justify-center mt-5 ">
            <HeroSpinSvg />
            <div className="absolute inset-0 w-full h-full animate-spin-slow">
              <svg viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                  fill="none"
                />
                <text className="text-[0.38em] fill-white font-semibold">
                  <textPath xlinkHref="#textPath" startOffset="0%">
                    {repeatedText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Cta */}
        <div>
          <Link to="/contact-us">
            <PrimaryButton title={'Global Offices'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
