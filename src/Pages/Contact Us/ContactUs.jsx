import BannerContainer from '@/Components/BannerContainer';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../Components/ui/select';
import bannerImage from '../../assets/contact-banner.jpg';
import PrimaryButton from '@/Components/PrimaryButton';
import { Helmet } from 'react-helmet';

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
        bannerImage={bannerImage}
      />

      <div className="py-8 md:py-16 2xl:py-32 container mx-auto px-5 md:px-7 font-poppins">
        <form action="" aria-label="Contact Form">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24">
            <div
              data-aos="fade-right"
              data-aos-duration={1200}
              className="lg:w-1/2"
            >
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c78b/1120/66860035e475161470f3d7de8b22db58?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YaeELbxqQJmeAq2g16LaZ2fqSKpHpx6HksRlE~HXCRPB~oST9H6NGJy76iBCHiaFAN3furUYbzPlYhf2L4UMN6guaTYqR8YBzs3F7FI1QCMKGe--rr55xcx4GotdRTM~8w9d9L7jUA8D7qoyj7kmr1EPMfmVcmPSDiUe6452bW7d1IjVrUVriWfENNroQJtTgxcwHmfZ1hRBWzOJ5vDvuKzt8OtmQKuZV~bOpZwMSYI5FYxWhAlopALsr8RpUArOZWNXVMlsbo1JoltRbPzJg3eP8WAoVdSIbqSKBD4lHrfsWjoHvdi5iue2da-GcpvJe~spk~DqSjqBtISblPetYA__"
                  alt="Contact Us Illustration"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div>
                <h2
                  data-aos="fade-left"
                  data-aos-duration={1200}
                  id="contact-us-section"
                  className="text-2xl md:text-3xl lg:text-4xl text-center md:text-start font-semibold text-primaryColor"
                >
                  Contact us
                </h2>
              </div>
              <div className="pt-6 md:pt-8 xl:pt-10 w-full space-y-3 md:space-y-4 lg:space-y-5">
                <div
                  data-aos="fade-left"
                  data-aos-duration={1200}
                  className="w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5"
                >
                  <label htmlFor="name" className="sr-only">
                    Name/Surname
                  </label>
                  <input
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
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
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  border focus:border-[#050505CC] border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Email*"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration={1300}
                  className="w-full flex flex-col md:flex-row gap-5"
                >
                  <label htmlFor="number" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Phone Number*"
                    type="number"
                    name="number"
                    id="number"
                    required
                  />

                  <Select aria-label="Select Country" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="China">China</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="United States">
                          United States
                        </SelectItem>
                        <SelectItem value="Indonesia">Indonesia</SelectItem>
                        <SelectItem value="Russia">Russia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div
                  data-aos="fade-left"
                  data-aos-duration={1400}
                  className="w-full flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5"
                >
                  <label htmlFor="companyName" className="sr-only">
                    Company Name
                  </label>
                  <input
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Company Name*"
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                  />

                  <Select aria-label="How did you hear about us" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="How did you hear about us*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Media</SelectLabel>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Linkedin">Linkedin</SelectItem>
                        <SelectItem value="Twitter">Twitter</SelectItem>
                        <SelectItem value="Website">Website</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div data-aos="fade-left" data-aos-duration={1450}>
                  <Select aria-label="Position/Role" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="What is your position/role in the company*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Role</SelectLabel>
                        <SelectItem value="Managing Director">
                          Managing Director
                        </SelectItem>
                        <SelectItem value="Chief Operating Officer (COO)">
                          Chief Operating Officer (COO)
                        </SelectItem>
                        <SelectItem value="Vice President">
                          Vice President
                        </SelectItem>
                        <SelectItem value="Director">Director</SelectItem>
                        <SelectItem value="Manager">Manager</SelectItem>
                        <SelectItem value="Team Lead">Team Lead</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div data-aos="fade-left" data-aos-duration={1500}>
                  <Select aria-label="Products/Services" required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Products/service you may be interested in*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Products/Service</SelectLabel>
                        <SelectItem value="Software Development">
                          Software Development
                        </SelectItem>
                        <SelectItem value="Web Development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="Mobile App Development">
                          Mobile App Development
                        </SelectItem>
                        <SelectItem value="Cloud Solutions">
                          Cloud Solutions
                        </SelectItem>
                        <SelectItem value="Cybersecurity Services">
                          Cybersecurity Services
                        </SelectItem>
                        <SelectItem value="Digital Marketing">
                          Digital Marketing
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div data-aos="fade-left" data-aos-duration={1550}>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full focus:outline-none px-5 py-3 md:py-4 text-sm md:text-base lg:py-4  focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Message*"
                    name="message"
                    id="message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="mt-5 md:mt-8 lg:mt-10">
            <div className="flex flex-col gap-3 md:gap-5">
              <label
                data-aos="fade-left"
                data-aos-duration={1200}
                htmlFor="first-consent"
                className="cursor-pointer flex items-start gap-2"
              >
                <input
                  type="checkbox"
                  id="first-consent"
                  name="first-consent"
                  required
                  className="peer appearance-none size-4 md:size-[22px] mt-1 border border-green-400 rounded flex items-center justify-center"
                />
                <span className="ml-2 w-4/5 lg:text-lg leading-[1.6] text-sm md:text-base">
                  Consent to the receipt of news and benefits via emails, SMS,
                  applications, social media, telephones, and direct mails from
                  <br className="hidden md:block" />
                  VGS International Corporation Co. Ltd.
                </span>
              </label>

              <label
                data-aos="fade-right"
                data-aos-duration={1300}
                htmlFor="second-consent"
                className="cursor-pointer flex items-start gap-2"
              >
                <input
                  type="checkbox"
                  id="second-consent"
                  name="second-consent"
                  required
                  className="peer appearance-none size-4 md:size-[22px] mt-1 border border-green-400 rounded flex items-center justify-center"
                />
                <span className="ml-2 w-4/5 lg:text-lg leading-[1.6] text-sm md:text-base">
                  Consent to sending of my personal data to VGS’s affiliates and
                  business partners to receive news and benefits via emails,
                  <br />
                  SMS, applications, social media, telephones, and direct mails.
                </span>
              </label>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration={1300}
              className="mt-4 md:mt-6 lg:mt-8"
            >
              <button type="submit">
                <PrimaryButton
                  title={'Submit'}
                  mobile={true}
                  universal={true}
                />
              </button>
            </div>
          </div>
        </form>

        {/* Details */}
      </div>
    </section>
  );
};

export default ContactUs;
