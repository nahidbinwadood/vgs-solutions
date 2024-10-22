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
  const { register, handleSubmit, reset } = useForm();
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const onsubmit = (data) => {
    const { name, email, number, companyName, message } = data;
    const userInfo = { name, email, country, number, companyName, message };
    setLoading(true);
    // email js:

    emailjs
      .send(
        'service_gbkkw4q',
        'template_05qji2x',
        userInfo,
        'WKooJrC5laBR1VmBK'
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success('Your message sent successfully!');
          setLoading(false);
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleSelectCountry = (value) => {
    setCountry(value);
  };
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
        <form
          ref={form}
          onSubmit={handleSubmit(onsubmit)}
          action=""
          aria-label="Contact Form"
        >
          <div className="flex flex-col items-center justify-center lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full">
            <div className="w-full lg:w-1/2">
              <div>
                <h2
                  data-aos="fade-left"
                  data-aos-duration={1200}
                  id="contact-us-section"
                  className="text-2xl  md:text-3xl lg:text-4xl text-center font-semibold text-primaryColor"
                >
                  Contact us
                </h2>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration={1400}
                className="pt-6 md:pt-8 xl:pt-10 w-full space-y-3 md:space-y-4 lg:space-y-5"
              >
                <div className="w-full flex flex-col gap-3 md:gap-4 lg:gap-5">
                  <label htmlFor="name" className="sr-only">
                    Name/Surname
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-black "
                    placeholder="Name/Surname*"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    {...register('email', { required: true })}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  border focus:border-[#050505CC] border-[#0505050F] rounded-md placeholder:text-black"
                    placeholder="Email*"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="w-full flex flex-col  gap-5">
                  <label htmlFor="number" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    {...register('number', { required: true })}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-black"
                    placeholder="Phone Number*"
                    type="number"
                    name="number"
                    id="number"
                    required
                  />

                  <Select
                    onValueChange={handleSelectCountry}
                    aria-label="Select Country"
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="Afghanistan">Afghanistan</SelectItem>
                        <SelectItem value="Armenia">Armenia</SelectItem>
                        <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
                        <SelectItem value="Bahrain">Bahrain</SelectItem>
                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="Bhutan">Bhutan</SelectItem>
                        <SelectItem value="Brunei">Brunei</SelectItem>
                        <SelectItem value="Cambodia">Cambodia</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                        <SelectItem value="Cyprus">Cyprus</SelectItem>
                        <SelectItem value="Georgia">Georgia</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="Indonesia">Indonesia</SelectItem>
                        <SelectItem value="Iran">Iran</SelectItem>
                        <SelectItem value="Iraq">Iraq</SelectItem>
                        <SelectItem value="Israel">Israel</SelectItem>
                        <SelectItem value="Japan">Japan</SelectItem>
                        <SelectItem value="Jordan">Jordan</SelectItem>
                        <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
                        <SelectItem value="Kuwait">Kuwait</SelectItem>
                        <SelectItem value="Kyrgyzstan">Kyrgyzstan</SelectItem>
                        <SelectItem value="Laos">Laos</SelectItem>
                        <SelectItem value="Lebanon">Lebanon</SelectItem>
                        <SelectItem value="Malaysia">Malaysia</SelectItem>
                        <SelectItem value="Maldives">Maldives</SelectItem>
                        <SelectItem value="Mongolia">Mongolia</SelectItem>
                        <SelectItem value="Myanmar">Myanmar</SelectItem>
                        <SelectItem value="Nepal">Nepal</SelectItem>
                        <SelectItem value="North Korea">North Korea</SelectItem>
                        <SelectItem value="Oman">Oman</SelectItem>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                        <SelectItem value="Palestine">Palestine</SelectItem>
                        <SelectItem value="Philippines">Philippines</SelectItem>
                        <SelectItem value="Qatar">Qatar</SelectItem>
                        <SelectItem value="Saudi Arabia">
                          Saudi Arabia
                        </SelectItem>
                        <SelectItem value="Singapore">Singapore</SelectItem>
                        <SelectItem value="South Korea">South Korea</SelectItem>
                        <SelectItem value="Sri Lanka">Sri Lanka</SelectItem>
                        <SelectItem value="Syria">Syria</SelectItem>
                        <SelectItem value="Taiwan">Taiwan</SelectItem>
                        <SelectItem value="Tajikistan">Tajikistan</SelectItem>
                        <SelectItem value="Thailand">Thailand</SelectItem>
                        <SelectItem value="Timor-Leste">Timor-Leste</SelectItem>
                        <SelectItem value="Turkey">Turkey</SelectItem>
                        <SelectItem value="Turkmenistan">
                          Turkmenistan
                        </SelectItem>
                        <SelectItem value="United Arab Emirates">
                          United Arab Emirates
                        </SelectItem>
                        <SelectItem value="Uzbekistan">Uzbekistan</SelectItem>
                        <SelectItem value="Vietnam">Vietnam</SelectItem>
                        <SelectItem value="Yemen">Yemen</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5">
                  <label htmlFor="companyName" className="sr-only">
                    Company Name
                  </label>
                  <input
                    {...register('companyName', { required: true })}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-black "
                    placeholder="Company Name*"
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-black "
                    placeholder="Message*"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration={1300}
                className="mt-4 md:mt-6 lg:mt-8"
              >
                <button
                  className={`bg-primaryColor flex items-center justify-center h-10 md:h-[50px] border sm:py-3 sm:px-6 w-full md:w-40 md:px-7 px-8 py-3 border-primaryColor duration-500 transition text-white rounded-sm md:rounded-md
                           hover:text-primaryColor hover:bg-transparent text-xs sm:text-sm md:text-base lg:text-lg`}
                  aria-label={'Submit'}
                >
                  {loading ? (
                    <CgSpinnerTwo className="size-6 animate-spin" />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Details */}
      </div>
    </section>
  );
};

export default ContactUs;
