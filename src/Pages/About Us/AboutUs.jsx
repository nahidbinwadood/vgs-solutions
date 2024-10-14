import AboutUsCard from '@/Components/AboutUsCard';
import BannerContainer from '@/Components/BannerContainer';
import SectionTitleContainer from '@/Components/SectionTitleContainer';
import bannerImage from '../../assets/banner-image.jpg';
import { Helmet } from 'react-helmet';
const AboutUs = () => {
  const aboutUsCardInformation = [
    {
      image:
        'https://images.unsplash.com/photo-1531537571171-a707bf2683da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Simplifying Global Sourcing',
      description:
        ' Welcome to VGS - Your Trusted Partner in Global Sourcing Navigating the complexities of international business can be a daunting task. From cultural differences and language barriers to varying regulations and market dynamics, entering a foreign market poses unique challenges that can hinder your success. Companies often face uncertainties regarding sourcing quality products, ensuring compliance, and managing supply chain logistics effectively.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1531539427495-97c44a449837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Bridging the Gap in Global Sourcing',
      description:
        'At VGS, we understand these challenges all too well. Our expertise lies in simplifying the sourcing process for businesses looking to expand their horizons. With years of experience in international trade and a deep understanding of diverse markets, we provide tailored solutions that cater to your needs. Our dedicated team of professionals is committed to bridging the gap between you and reliable suppliers, ensuring a seamless transition into new markets.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1681569685386-b7bda397672e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Your Strategic Partner for Global Success',
      description:
        'Welcome to VGS - Your Trusted Partner in Global Sourcing Navigating the complexities of international business can be a daunting task. From cultural differences and language barriers to varying regulations and market dynamics, entering a foreign market poses unique challenges that can hinder your success. Companies often face uncertainties regarding sourcing quality products, ensuring compliance, and managing supply chain logistics effectively',
    },
  ];
  return (
    <section aria-labelledby="about-us-section" className='overflow-x-hidden'>
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
          <SectionTitleContainer
            title="Simplifying Global Sourcing for"
            highlightedTitle="Your Business Success"
            description="Navigating international business is challenging with cultural differences and regulations. VGS simplifies sourcing, connecting you with reliable suppliers, so you can focus on growing your business globally."
          />
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
