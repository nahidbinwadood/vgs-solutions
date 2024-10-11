import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';
import BlogCard from '../../../Components/BlogCard';

const News = () => {
  const allBlogs = [
    {
      image:
        'https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins...',
    },
    {
      image:
        'https://img.freepik.com/free-photo/african-european-girls-looking-computer-screen-while-blonde-lady-reading-documents-indoor-portrait-asian-student-glasses-talking-with-female-friends-uniersity_197531-3792.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727913600&semt=ais_hybrid',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins...',
    },
    {
      image:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      subTitle: 'International supply chain solutions',
      title:
        'Collaboration with Thai Government to Drive Global Growth in Middle East',
      description:
        'Leverage lower production and labor costs to significantly reduce overall expenses and maximize profit margins...',
    },
  ];
  return (
    <div className="bg-primaryBg py-20">
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-primary font-semibold">
              News & Activities
            </h3>
            <h4 className="text-4xl font-semibold">Explore Our Latest</h4>
            <h4 className="text-4xl font-semibold text-primary">
              Updates and Activities
            </h4>
            <p className="text-border w-1/2 mt-3">
              Stay connected with VGS for the latest news and activities.
              Discover our achievements, industry insights, and upcoming events
              as we continue to innovate and enhance global sourcing solutions
              for our clients.
            </p>
          </div>
          <div className="w-fit text-nowrap flex items-end">
            <Link to="/blog">
              <PrimaryButton title={'See More'} />
            </Link>
          </div>
        </div>

        {/* Card Section */}
        <div className="pt-10 grid grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default News;
