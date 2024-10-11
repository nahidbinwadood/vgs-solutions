/* eslint-disable react/prop-types */
const SecondaryButton = ({ title }) => {
  return (
    <button className="bg-transparent text-border border border-border hover:bg-transparent hover:text-white hover:border-primary hover:bg-primary duration-500 transition px-8 py-[10px] rounded-md">
      {title}
    </button>
  );
};

export default SecondaryButton;
