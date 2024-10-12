import AboutUs from '@/Pages/About Us/AboutUs';
import BlogDetails from '@/Pages/Blog Details/BlogDetails';
import Blog from '@/Pages/Blog/Blog';
import ContactUs from '@/Pages/Contact Us/ContactUs';
import Services from '@/Pages/Services/Services';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';
import MainLayout from './../Layouts/MainLayout';

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
      {
        path: '/blogs',
        element: <Blog />,
      },
      {
        path: '/blog-details/:id',
        element: <BlogDetails />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
