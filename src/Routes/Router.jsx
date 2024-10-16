import ContactUs from '@/Pages/Contact Us/ContactUs';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../Pages/Homepage/Homepage';
import MainLayout from './../Layouts/MainLayout';
import Expectations from './../Pages/Expectations/Expectations';
import TrustingUs from './../Pages/Trusting Us/TrustingUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/expectations',
        element: <Expectations />,
      },
      {
        path: '/trusting-us',
        element: <TrustingUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
