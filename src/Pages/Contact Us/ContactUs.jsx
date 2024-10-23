import BannerContainer from '@/Components/BannerContainer';
import { CgSpinnerTwo } from 'react-icons/cg';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../Components/ui/select';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
  return (
    <section aria-labelledby="contact-us-section" className="overflow-x-hidden">
      <Helmet>
        <title>VGS Solutions | Contact Us</title>
        <meta name="description" content="Contact Us" />
      </Helmet>
      {/* Banner */}
      <BannerContainer
        title="Contact us"
        subTitle="Contact"
        bannerImage={'https://i.imgur.com/OXNYkXi.jpeg'}
      />

      <div className="py-8 md:py-16 2xl:py-32 container mx-auto px-5 md:px-7 font-poppins">
        <h2 className="text-center font-bold text-4xl">Contact </h2>
        <div className='text-center'>
         <p className='text-2xl font-semibold pt-10'>Email:  <a
            className="text-primaryColor font-medium"
            href="mailto:contact@vgsthai.com"
          >
            contact@vgsthai.com
          </a></p>
        </div>
        {/* Details */}
      </div>
    </section>
  );
};

export default ContactUs;
