import AboutUs from '@/Pages/About Us/AboutUs';
import Services from '@/Pages/Services/Services';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';
import MainLayout from './../Layouts/MainLayout';
import Blog from '@/Pages/Blog/Blog';
import BlogDetails from '@/Pages/Blog Details/BlogDetails';

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
        path: '/blogs/blog-details',
        element: <BlogDetails />,
      },
    ],
  },
]);

export default router;
