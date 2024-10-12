import BannerContainer from '@/Components/BannerContainer';
import SectionTitleContainer from '@/Components/SectionTitleContainer';
import bannerImage from '../../assets/blog-banner.jpg';
import BlogCard from '@/Components/BlogCard';
const BlogDetails = () => {
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
          title={'Collaboration with Thai Government to Drive'}
          highlightedTitle={'Global Growth in Middle East'}
        />

        {/* Details */}
        <div className=" ">
          <div className="h-[600px] overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-xl"
              src="https://img.freepik.com/free-photo/asian-manager-with-sincere-smile-posing-flipchart-while-girls-talking_197531-4977.jpg"
              alt=""
            />
          </div>
          <div className="text-textColor pb-20">
            <p className="pt-5">Published On: June 11, 2024</p>
            <p className="pt-10 leading-[1.8]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&apos;t anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>

          {/* related Article */}
          <div className="">
            <h2 className="text-2xl font-semibold">Related Article</h2>
            <div>
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
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
