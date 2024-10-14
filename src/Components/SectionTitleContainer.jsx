/* eslint-disable react/prop-types */
const SectionTitleContainer = ({ title, highlightedTitle, description }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2 mb-8 md:mb-12 lg:mb-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</h2>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primaryColor">
        {highlightedTitle}
      </h2>
      <p
        className={`text-sm md:text-base w-full lg:w-2/3 mt-2 text-textColor ${
          description ? 'block' : 'hidden'
        }`}
      >
        {description && description}
      </p>
    </div>
  );
};

export default SectionTitleContainer;
