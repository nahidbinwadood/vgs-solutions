import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BlogCard = ({ image, subTitle, title, description }) => {
  return (
    <div className="bg-white p-5 rounded-xl">
      <div className="h-[275px] w-full">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h5 className="text-textColor">{subTitle}</h5>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-textColor">
          {description}
          <Link className="text-black font-medium" to="blog-details">
            Read article
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
