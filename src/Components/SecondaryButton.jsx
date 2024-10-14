/* eslint-disable react/prop-types */
const SecondaryButton = ({ title, universal }) => {
  return (
    <button
      className={`bg-transparent text-[#5A5C5F] border border-[#5A5C5F] hover:text-white hover:border-primaryColor hover:bg-primaryColor duration-500 transition rounded-sm md:rounded-md
    ${
      universal ? 'px-4 py-2 text-xs sm:text-sm md:text-base' : 'px-8 py-[10px]'
    }`}
      aria-label={title}
    >
      {title}
    </button>
  );
};

export default SecondaryButton;
