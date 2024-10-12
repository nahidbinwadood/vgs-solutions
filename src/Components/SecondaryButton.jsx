/* eslint-disable react/prop-types */
const SecondaryButton = ({ title }) => {
  return (
    <button className="bg-transparent text-[#5A5C5F] border border-[#5A5C5F] hover:text-white hover:border-primaryColor hover:bg-primaryColor duration-500 transition px-8 py-[10px] rounded-md">
      {title}
    </button>
  );
};

export default SecondaryButton;
