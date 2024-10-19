import { SyncLoader } from 'react-spinners';
import logo from "../assets/logo.png"

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      {/* <SyncLoader
        color={'#18A3B6'}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <div className='animate-bounce'>
        <img src={logo} alt=""/>
      </div>
    </div>
  );
};

export default Loader;
