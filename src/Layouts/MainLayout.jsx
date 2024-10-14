import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main className="font-poppins">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
