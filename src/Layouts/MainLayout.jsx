import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useEffect, useState } from 'react';
import Loader from '@/Components/Loader';

const MainLayout = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main className="font-poppins min-h-[calc(100vh-569px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
