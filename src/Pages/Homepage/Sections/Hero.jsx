
const Hero = () => {
  return (
    <section
    aria-labelledby="welcome-heading"
    className="bg-cover bg-center bg-no-repeat text-white font-poppins"
    style={{
      backgroundImage: `linear-gradient(180deg, rgba(0, 25, 29, 0.8), rgba(0, 25, 29, 0.6)), url('https://i.imgur.com/3vNKR2D.png')`,
    }}
  >
    {/* Your content goes here */}


      <div className="container mx-auto   px-5 md:px-7 py-10 sm:py-12 md:py-14 lg:py-20 xl:py-32">
        <header className="uppercase">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1200"
            id="welcome-heading"
            className="text-2xl sm:text-3xl mb-2 md:text-4xl lg:text-5xl 2xl:text-6xl leading-snug md:leading-tight"
          >
            Welcome to VGS
          </h1>
          <h2
            data-aos="zoom-in"
            data-aos-duration="1300"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-normal sm:leading-normal md:leading-snug lg:leading-tight 2xl:leading-tight"
          >
            Your Trusted Partner in Global Sourcing
          </h2>
        </header>

        <p
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="lg:w-2/3 pt-5 text-sm md:text-base lg:text-lg"
        >
          We simplify global sourcing by connecting you with reliable suppliers
          and navigating international trade challenges. With VGS, focus on
          growing your business while we handle compliance, logistics, and
          market entry
        </p>
      </div>
    </section>
  );
};

export default Hero;
