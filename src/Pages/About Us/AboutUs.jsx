import AboutUsCard from '@/Components/AboutUsCard';
const AboutUs = () => {
  const aboutUsCardInformation = [
    {
      image:
        'https://images.unsplash.com/photo-1531537571171-a707bf2683da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Overcoming the Challenges of Global Business',
      description:
        'Welcome to VGS - Your Trusted Partner in Global Sourcing Navigating the complexities of international business can be a daunting task. From cultural differences and language barriers to varying regulations and market dynamics, entering a foreign market poses unique challenges that can hinder your success. Companies often face uncertainties regarding sourcing quality products, ensuring compliance, and managing supply chain logistics effectively.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1531539427495-97c44a449837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tailored Solutions for Seamless Market',
      description:
        'At VGS, we understand these challenges all too well. Our expertise lies in simplifying the sourcing process for businesses looking to expand their horizons. With years of experience in international trade and a deep understanding of diverse markets, we provide tailored solutions that cater to your needs. Our dedicated team of professionals is committed to bridging the gap between you and reliable suppliers, ensuring a seamless transition into new markets.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1681569685386-b7bda397672e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: ' Your Strategic Partner for Global Growth',
      description:
        ' Choosing VGS means gaining a strategic partner that prioritizes your success. We leverage our robust network, industry insights, and local knowledge to mitigate risks and maximize opportunities, allowing you to focus on what you do best—growing your business. Let us handle the complexities of sourcing so you can thrive in the global marketplace.',
    },
  ];
  return (
    <section aria-labelledby="about-us-section" className="overflow-x-hidden">
      {/* Banner */}

      {/* Contents */}
      <div className="py-8 md:py-16 2xl:py-0 2xl:pt-24 2xl:pb-10 container mx-auto px-5 md:px-7">
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
