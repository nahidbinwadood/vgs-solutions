import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../Layouts/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';
import AboutUs from '@/Pages/About Us/AboutUs';
import Services from '@/Pages/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);

export default router;
