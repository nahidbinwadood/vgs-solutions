import { Outlet } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="container mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
