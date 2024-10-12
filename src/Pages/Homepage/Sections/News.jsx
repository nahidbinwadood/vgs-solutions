import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';
import BlogCard from '@/Components/BlogCard';

const News = () => {
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
  ];
  return (
    <div className="bg-primaryBg py-20">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-primaryColor font-semibold">
              News & Activities
            </h3>
            <h4 className="text-4xl font-semibold">Explore Our Latest</h4>
            <h4 className="text-4xl font-semibold text-primaryColor">
              Updates and Activities
            </h4>
            <p className="text-textColor w-1/2 mt-3">
              Stay connected with VGS for the latest news and activities.
              Discover our achievements, industry insights, and upcoming events
              as we continue to innovate and enhance global sourcing solutions
              for our clients.
            </p>
          </div>
          <div className="w-fit text-nowrap flex items-end">
            <Link to="/blogs">
              <PrimaryButton title={'See More'} />
            </Link>
          </div>
        </div>

        {/* Card Section */}
        <div className="pt-10 grid grid-cols-3 gap-8">
          {allBlogs?.map((blog, idx) => (
            <BlogCard
              key={idx}
              image={blog?.image}
              id={blog?.id}
              subTitle={blog?.subTitle}
              title={blog?.title}
              description={blog?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
