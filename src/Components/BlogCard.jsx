/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, image, subTitle, title, description }) => {
  const [finalDescription, setFinalDescription] = useState('');

  useEffect(() => {
    if (description.length > 130) {
      setFinalDescription(description.slice(0, 130) + '...');
    }
  }, [description]);
  return (
    <div className="bg-white p-5 rounded-xl shadow-[6px_6px_32px_0px_rgba(0,0,0,0.1)]">
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
          {finalDescription ? finalDescription : description}
          <Link
            to={`/blog-details/${id}`}
            className="text-black font-medium ml-2"
          >
            Read article
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
