import BannerContainer from '@/Components/BannerContainer';
import { Helmet } from 'react-helmet';
import bannerImage from '../../assets/services-banner.jpg';
const TrustingUs = () => {
  const trustingUsContent = [
    {
      img: 'https://media.istockphoto.com/id/1170045548/photo/businessman-people-shaking-hands-for-agreement-office-teamwork-and-cooperation-concept.jpg?s=612x612&w=0&k=20&c=9wT5-G1qU6EO2u9Lf0tZTk0BmRo2O5PLt0dIVQJbTCc=',
      description:
        "'We understand that trust is fundamental to a successful partnership, and we are committed to earning and maintaining that trust with our clients.'",
    },
    {
      img: 'https://media.istockphoto.com/id/682482504/photo/portrait-of-a-young-office-worker.jpg?s=612x612&w=0&k=20&c=UidoOKTGIkzme_3w_a2WQZiDw_Ykh8SRBWE8IQrM53M=',
      description:
        'With our knowledge and a vast network of reliable suppliers, we strive to deliver high-quality products tailored to your needs. We prioritize transparency and timely communication in all our dealings, providing clients with clear insights into our sourcing processes, timelines, and pricing.',
    },
    {
      img: 'https://media.istockphoto.com/id/1390434441/photo/lesbian-couple-and-their-friends-enjoy-reading-books-together-sharing-at-home-during-weekend.jpg?s=612x612&w=0&k=20&c=wlxn3pPXLGSMLiuvDbsIlG3W3yXyMSS57rLVrvD5KNs=',
      description:
        'By choosing us as your sourcing partner, you can be confident that your business is in capable, trustworthy hands. Your business is Our Business!',
    },
  ];
  return (
    <section
      aria-labelledby="trusting-us-section"
      className="overflow-x-hidden"
    >
      <Helmet>
        <title>VGS Solutions | Trusting Us</title>
        <meta name="description" content="Trusting Us" />
      </Helmet>
      {/* Banner */}
      <BannerContainer
        title="Trusting Us"
        subTitle="Trusting Us"
        bannerImage={bannerImage}
      />

      {/* expectations */}
      <section className="bg-white py-10 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trustingUsContent.map((paragraph, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration={1200 + index * 200}
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <div className="w-full  :h-72 pb-5">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src={paragraph?.img}
                      alt=""
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {paragraph?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TrustingUs;
