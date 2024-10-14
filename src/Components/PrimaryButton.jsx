// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title, variant, mobile, universal }) => {
  return (
    <div
      className={`bg-primaryColor border border-primaryColor w-fit duration-500 transition text-white rounded-md ${
        variant
          ? 'hover:border-white hover:text-white hover:bg-transparent'
          : 'hover:bg-transparent hover:text-primaryColor'
      }
      ${mobile ? 'px-5 py-2 sm:py-3 sm:px-6 md:px-7' : 'px-8 py-3'}
      ${universal ? 'text-xs sm:text-sm md:text-base lg:text-lg' : 'text-lg '}

      `}
    >
      {title}
    </div>
  );
};

export default PrimaryButton;
