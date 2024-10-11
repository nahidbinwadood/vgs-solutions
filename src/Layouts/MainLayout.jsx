import { Outlet } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="font-poppins">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
