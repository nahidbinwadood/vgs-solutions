import AboutUsCard from '@/Components/AboutUsCard';
import BannerContainer from '@/Components/BannerContainer';
import bannerImage from '../../assets/banner-image.jpg';
import { Helmet } from 'react-helmet';
const AboutUs = () => {
  const aboutUsCardInformation = [
    {
      image:
        'https://images.unsplash.com/photo-1531537571171-a707bf2683da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Streamlining Your Global Sourcing Journey',
      description:
        ' At VGS, we simplify the complexities of international sourcing so you can focus on expanding your business. From overcoming cultural differences and language barriers to ensuring product compliance, we manage all the challenges that come with entering new markets. Our team provides tailored solutions that ensure a smooth transition, so your business can grow seamlessly in the global marketplace.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1531539427495-97c44a449837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bridging the Gap Between You and Reliable Suppliers',
      description:
        ' Our mission at VGS is to bridge the gap between businesses and trustworthy suppliers. With years of experience in global markets, we connect you to reliable partners who meet your product quality and compliance needs. By leveraging our network and expertise, we ensure a seamless supply chain, allowing you to focus on what matters most—growing your business.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1681569685386-b7bda397672e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Strategic Partnership for Global Success',
      description:
        "Choosing VGS means gaining a strategic partner committed to your success in the global marketplace. We mitigate the risks and complexities of international trade, leveraging our industry insights and local knowledge to maximize opportunities for your business. With VGS as your trusted sourcing partner, you can confidently navigate the challenges of global trade and focus on driving your business forward.",
    },
  ];
  return (
    <section aria-labelledby="about-us-section" className="overflow-x-hidden">
      <Helmet>
        <title>VGS Solutions | About Us</title>
        <meta name="description" content="About Us" />
      </Helmet>
      {/* Banner */}
      <BannerContainer
        title="About Us"
        subTitle="About Us"
        bannerImage={bannerImage}
      />

      {/* Contents */}
      <div className="py-8 md:py-16 2xl:py-32 container mx-auto px-5 md:px-7">
        {/* Title */}
        <header>
          <div className="flex flex-col gap-1 md:gap-2 mb-8 md:mb-12 lg:mb-16">
            <h2
              data-aos="fade-right"
              data-aos-duration={1200}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primaryColor"
            >
              Welcome to VGS{' '}
              <span className="text-black">
                - Your Trusted Partner in Global Sourcing
              </span>
            </h2>

            <p
              data-aos="fade-right"
              data-aos-duration={1400}
              className="text-sm md:text-base w-full lg:w-2/3 mt-2 text-textColor"
            >
              Navigating the complexities of international business can be a
              daunting task. From cultural differences and language barriers to
              varying regulations and market dynamics, entering a foreign market
              poses unique challenges that can hinder your success. Companies
              often face uncertainties regarding sourcing quality products,
              ensuring compliance, and managing supply chain logistics
              effectively.
            </p>
          </div>
        </header>

        {/* About Us Cards */}
        <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
          {aboutUsCardInformation?.map((info) => (
            <AboutUsCard
              key={info?.title}
              image={info?.image}
              title={info?.title}
              description={info?.description}
              aria-label={`Read more about ${info?.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
