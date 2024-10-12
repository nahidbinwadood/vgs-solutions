import BannerContainer from '@/Components/BannerContainer';
import bannerImage from '../../assets/services-banner.jpg';
import SectionTitleContainer from '@/Components/SectionTitleContainer';
import ServiceCard from '@/Components/ServiceCard';

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
    <section>
      {/* banner */}
      <BannerContainer
        title={'Our Services'}
        subTitle={'Services'}
        bannerImage={bannerImage}
      />

      {/* Contents */}
      <div className="py-32 container mx-auto">
        {/* Title */}
        <SectionTitleContainer
          title={'Comprehensive Global Sourcing Solutions'}
          highlightedTitle={'for Optimal Business Performance'}
          description={
            'Choosing VGS means cost efficiency, a diverse supplier base, stringent quality control, expert market knowledge, cultural insights, efficient logistics, risk mitigation, sustainability, customized solutions, and ongoing support for your business success.'
          }
        />

        {/* Services Cards */}
        <div className="grid grid-cols-2 gap-10">
          {ServiceCardInfo?.map((service) => (
            <ServiceCard
              key={service?.title}
              title={service?.title}
              description={service?.description}
              image={service?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
