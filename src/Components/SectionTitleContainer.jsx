/* eslint-disable react/prop-types */
const SectionTitleContainer = ({ title, highlightedTitle, description }) => {
  return (
    <div className="flex flex-col gap-2 mb-16">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <h2 className="text-4xl font-semibold text-primaryColor">
        {highlightedTitle}
      </h2>
      <p className="w-2/3 mt-2 text-textColor">{description && description}</p>
    </div>
  );
};

export default SectionTitleContainer;
