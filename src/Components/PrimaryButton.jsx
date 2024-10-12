// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title, variant }) => {
  return (
    <div
      className={`bg-primaryColor border border-primaryColor  duration-500 transition px-8 py-3 text-lg text-white rounded-md ${
        variant
          ? 'hover:border-white hover:text-white hover:bg-transparent'
          : 'hover:bg-transparent hover:text-primaryColor'
      }`}
    >
      {title}
    </div>
  );
};

export default PrimaryButton;
