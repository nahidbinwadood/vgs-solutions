import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';
import ServiceCard from '../../../Components/ServiceCard';

const Services = () => {
  const ServiceCardInfo = [
    {
      title: 'Cost Efficiency Solutions',
      description:
        'Our team of experts will ensure that your products meet international standards to enhance customer satisfaction and peace of mind.',
      image:
        'https://img.freepik.com/free-photo/asian-colleague-male-female-friend-casual-dress-meeting-consult-work-together-with-fun-happiness-successful-brainstorm-workplace-business-partners-relation-ideas-concept_609648-2222.jpg',
    },
    {
      title: 'Cost Efficiency Solutions',
      description:
        'We have manufacturers and suppliers across various industries, ready to provide you with a wide selection of products and services.',
      image:
        'https://img.freepik.com/free-photo/asian-colleague-male-female-friend-casual-dress-meeting-consult-work-together-with-fun-happiness-successful-brainstorm-workplace-business-partners-relation-ideas-concept_609648-2222.jpg',
    },
    {
      title: 'Quality Control Assurance',
      description:
        'We implement stringent quality control measures to ensure your products meet international standards to enhance customer satisfaction and peace of mind',
      image:
        'https://watermark.lovepik.com/photo/20211201/large/lovepik-business-team-office-talking-about-work-picture_501327095.jpg',
    },
    {
      title: 'Expert Market Knowledge',
      description:
        'With an in-depth understanding of Asian markets and industry trends, we can identify the best sourcing opportunities tailored to your needs.',
      image:
        'https://png.pngtree.com/thumb_back/fw800/background/20221107/pngtree-conceptual-image-of-corporate-discussion-asian-business-professionals-in-a-meeting-photo-image_32812074.jpg',
    },
  ];
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-primaryBg py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 px-5 md:px-7 font-poppins"
    >
      <div className="container mx-auto px-5 md:px-7">
        <header className="text-center space-y-1 md:space-y-2">
          <h2
            id="services-heading"
            className="text-primaryColor font-semibold md:text-lg"
          >
            Our Services
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Comprehensive Global Sourcing Solutions for
          </h3>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primaryColor">
            Optimal Business Performance
          </h3>
        </header>

        {/* Card Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {ServiceCardInfo?.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service?.title}
              description={service?.description}
              image={service?.image}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="w-full mt-5 sm:mt-6 md:mt-8">
          <div className="flex items-center justify-center">
            <Link
              to="/services"
              aria-label="Learn more about our services and comprehensive solutions"
            >
              <PrimaryButton
                title={'See More'}
                mobile={true}
                universal={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
