import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <nav>
        <Navbar />
      </nav>
      <main className="font-poppins">
        <Outlet />
      </main>
      <footer className='hidden'>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
