import BannerContainer from '@/Components/BannerContainer';
import bannerImage from '../../assets/blog-banner.jpg';
import SectionTitleContainer from '@/Components/SectionTitleContainer';
import BlogCard from '@/Components/BlogCard';
import { PaginationNext, PaginationPrevious } from '@/Components/SvgContainer';

const Blog = () => {
  const allBlogs = [
    {
      image:
        'https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
    },
    {
      image:
        'https://img.freepik.com/free-photo/african-european-girls-looking-computer-screen-while-blonde-lady-reading-documents-indoor-portrait-asian-student-glasses-talking-with-female-friends-uniersity_197531-3792.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
    },
    {
      image:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
    },
    {
      image:
        'https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
    },
    {
      image:
        'https://img.freepik.com/free-photo/african-european-girls-looking-computer-screen-while-blonde-lady-reading-documents-indoor-portrait-asian-student-glasses-talking-with-female-friends-uniersity_197531-3792.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
    },
    {
      image:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins lower production and labor costs to significantly',
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
      <div className="py-32 container mx-auto">
        {/* Title */}
        <SectionTitleContainer
          title={'Explore Our Latest '}
          highlightedTitle={'Updates and Activities'}
          description={
            'Stay connected with VGS for the latest news and activities. Discover our achievements, industry insights, and upcoming events as we continue to innovate and enhance global sourcing solutions for our clients.'
          }
        />

        {/* Services Cards */}
        <div className="grid grid-cols-3 gap-10">
          {allBlogs?.map((blog) => (
            <BlogCard
              key={blog?.title}
              image={blog?.image}
              subTitle={blog?.subTitle}
              title={blog?.title}
              description={blog?.description}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full flex items-center justify-center pt-10">
          <div className="flex items-center gap-3">
            <div className="border size-10 border-textColor p-2 rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center">
              <PaginationPrevious />
            </div>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="border size-10 border-textColor p-2 rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center hover:text-white"
              >
                <span>{index + 1}</span>
              </div>
            ))}
            <div className="border size-10 border-textColor p-2 rounded-md cursor-pointer group hover:bg-primaryColor duration-300 transition hover:border-primaryColor flex items-center justify-center">
              <PaginationNext />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
