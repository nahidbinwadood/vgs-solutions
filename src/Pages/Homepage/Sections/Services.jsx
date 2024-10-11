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
    <section className="bg-primaryBg py-20 font-poppins">
      <div className="container mx-auto">
        <div>
          <div className="text-center space-y-2">
            <h3 className="text-lg text-primary">Services</h3>
            <h2 className="text-4xl font-semibold">
              Comprehensive Global Sourcing Solutions for
            </h2>
            <h2 className="text-4xl font-semibold text-primary">
              Optimal Business Performance
            </h2>
          </div>
        </div>

        {/* card section */}
        <div className="mt-16 grid grid-cols-2 gap-8">
          {ServiceCardInfo?.map((service) => (
            <ServiceCard
              key={service?.title}
              title={service?.title}
              description={service?.description}
              image={service?.image}
            />
          ))}
        </div>

        <div className="w-full mt-8">
          <div className='flex items-center justify-center'>
            <Link to='/services'>
              <PrimaryButton title={"See More"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
