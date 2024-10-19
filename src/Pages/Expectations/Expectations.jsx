import BannerContainer from '@/Components/BannerContainer';
import { Helmet } from 'react-helmet';
import bannerImage from '../../assets/blog-banner.jpg';

import { useEffect, useState } from 'react';
import Loader from '@/Components/Loader';

const Expectations = () => {
  const allExpectations = [
    {
      title: 'Cost Efficiency',
      description:
        'Leveraging lower production and labor costs can significantly reduce your overall expenses, maximizing your profit margins.',
    },
    {
      title: 'Diverse Supplier Base',
      description:
        'We have manufacturers and suppliers across various industries, ready to provide you with a wide selection of products and services.',
    },
    {
      title: 'Quality Control',
      description:
        'We implement stringent quality control measures to ensure your products meet international standards to enhance customer satisfaction and peace of mind.',
    },
    {
      title: 'Expert Market Knowledge',
      description:
        'With an in-depth understanding of Asian markets and industry trends, we can identify the best sourcing opportunities tailored to your needs.',
    },
    {
      title: 'Cultural Insights',
      description:
        'Our team’s knowledge of local customs and business practices enables smoother communication and good working relations with suppliers.',
    },
    {
      title: 'Efficient Logistics Solutions',
      description:
        'We offer streamlined logistics and supply chain management, ensuring timely delivery of products and minimizing delays.',
    },
    {
      title: 'Risk Mitigation',
      description:
        'By navigating legal and regulatory complexities on your behalf, your company helps to minimize risks associated with foreign trade.',
    },
    {
      title: 'Sustainability and Ethical Sourcing',
      description:
        'You can emphasize your commitment to sustainable practices by partnering with suppliers who prioritize ethical standards and environmentally friendly processes.',
    },
    {
      title: 'Customized Solutions',
      description:
        'Your company can provide tailored sourcing strategies and solutions to address the unique challenges and requirements of your business.',
    },
    {
      title: 'Ongoing Support',
      description:
        'Choosing your sourcing company means having access to continuous support and expert guidance throughout the sourcing process, fostering a long-term partnership.',
    },
  ];

  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    ); // Center the loader with flex
  }

  return (
    <section
      aria-labelledby="your-expectations-of-us-section"
      className="overflow-x-hidden"
    >
      <Helmet>
        <title>VGS Solutions | Your Expectations of Us</title>
        <meta name="description" content="Your Expectations of Us" />
      </Helmet>
      {/* Banner */}
      <BannerContainer
        title="Your Expectations of Us"
        subTitle="Your Expectations of Us"
        bannerImage={bannerImage}
      />

      {/* Expectations */}
      <div className="bg-gray-50 py-10 md:py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allExpectations.map((expectation, index) => (
              <div
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration={1200 + index * 100}
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform transform hover:scale-105 duration-500 cursor-pointer"
              >
                <h3 className="md:first-line:text-xl font-semibold text-gray-800 mb-2">
                  {expectation.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {expectation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
