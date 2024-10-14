import BannerContainer from '@/Components/BannerContainer';
import bannerImage from '../../assets/blog-banner.jpg';
import SectionTitleContainer from '@/Components/SectionTitleContainer';
import BlogCard from '@/Components/BlogCard';
import { PaginationNext, PaginationPrevious } from '@/Components/SvgContainer';

const Blog = () => {
  const allBlogs = [
    {
      id: '5807d0ed-0579-4429-b281-5a52e15431f2',
      image:
        'https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
      publishDate: 'October 24, 2023',
    },
    {
      id: '43737ed6-228a-44b3-84d0-c5dcb284538c',
      image:
        'https://img.freepik.com/free-photo/african-european-girls-looking-computer-screen-while-blonde-lady-reading-documents-indoor-portrait-asian-student-glasses-talking-with-female-friends-uniersity_197531-3792.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'By leveraging innovative technologies and partnerships, we have been able to provide cost-effective solutions while maintaining the highest quality standards. Our collaboration ensures seamless operations across borders, bringing new opportunities for economic development.',
      publishDate: 'June 09, 2023',
    },
    {
      id: '992364f5-ddf5-466f-b52e-6f6dfac01053',
      image:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Our team has continuously innovated to reduce overall expenses by optimizing the supply chain and leveraging low-cost production methods. This has significantly improved profit margins and efficiency across all sectors.',
      publishDate: 'December 23, 2022',
    },
    {
      id: '063e16e4-0af8-4410-bce4-331e9bb22378',
      image:
        'https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'The strategic partnership between VGS International and the Thai Government has opened doors for global growth, particularly in the Middle East. This collaboration will pave the way for better international supply chain solutions and foster mutual growth.',
      publishDate: 'May 03, 2024',
    },
    {
      id: 'dbba701e-fe7d-4b11-97ef-3495eefb7df9',
      image:
        'https://img.freepik.com/free-photo/african-european-girls-looking-computer-screen-while-blonde-lady-reading-documents-indoor-portrait-asian-student-glasses-talking-with-female-friends-uniersity_197531-3792.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'We are thrilled to announce our partnership, which focuses on boosting export opportunities, streamlining logistics, and cutting down overall operational costs for companies in the Middle East and Southeast Asia.',
      publishDate: 'November 23, 2022',
    },
    {
      id: 'c5b87af8-d3d6-4e4f-a26a-25ce9991d774',
      image:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'As we expand our international presence, this collaboration ensures that businesses in the Middle East and Southeast Asia can access the best-in-class supply chain solutions at lower costs, driving economic growth and sustainability.',
      publishDate: 'December 30, 2022',
    },
  ];

  return (
    <section>
      {/* banner */}
      <BannerContainer
        title={'News & Activities'}
        subTitle={'Blog'}
        bannerImage={bannerImage}
      />

      {/* Contents */}
      <div className="py-8 md:py-16 2xl:py-32 container mx-auto px-5 md:px-7">
        {/* Title */}
        <SectionTitleContainer
          title={'Explore Our Latest '}
          highlightedTitle={'Updates and Activities'}
          description={
            'Stay connected with VGS for the latest news and activities. Discover our achievements, industry insights, and upcoming events as we continue to innovate and enhance global sourcing solutions for our clients.'
          }
        />

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {allBlogs?.map((blog, idx) => (
            <BlogCard
              key={idx}
              id={blog?.id}
              image={blog?.image}
              subTitle={blog?.subTitle}
              title={blog?.title}
              description={blog?.description}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full flex items-center justify-center pt-6 md:pt-8 lg:pt-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="border  text-xs rounded-sm md:size-8 lg:size-auto border-textColor p-1 lg:p-[7px] md:rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center">
              <PaginationPrevious />
            </div>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="border size-[30px] md:text-sm  md:size-8 text-xs rounded-sm lg:size-10 border-textColor p-2 md:rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center hover:text-white"
              >
                <span>{index + 1}</span>
              </div>
            ))}
            <div className="border  text-xs rounded-sm md:size-8 lg:size-auto  border-textColor p-1 lg:p-[7px] md:rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center">
              <PaginationNext />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
