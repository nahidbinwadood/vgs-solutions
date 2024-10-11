// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ title }) => {
  return (
    <button className="bg-primary border border-primary hover:bg-transparent hover:text-primary duration-500 transition px-8 py-3 text-lg text-white rounded-md">
      {title}
    </button>
  );
};

export default PrimaryButton;
