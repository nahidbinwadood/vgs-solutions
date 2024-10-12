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

const ContactUs = () => {
  return (
    <section>
      {/* banner */}
      <BannerContainer
        title={'Contact us'}
        subTitle={'Contact'}
        bannerImage={bannerImage}
      />

      <div className="py-32 container mx-auto font-poppins">
        <form action="">
          <div className="flex gap-24">
            <div className="w-1/2">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c78b/1120/66860035e475161470f3d7de8b22db58?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YaeELbxqQJmeAq2g16LaZ2fqSKpHpx6HksRlE~HXCRPB~oST9H6NGJy76iBCHiaFAN3furUYbzPlYhf2L4UMN6guaTYqR8YBzs3F7FI1QCMKGe--rr55xcx4GotdRTM~8w9d9L7jUA8D7qoyj7kmr1EPMfmVcmPSDiUe6452bW7d1IjVrUVriWfENNroQJtTgxcwHmfZ1hRBWzOJ5vDvuKzt8OtmQKuZV~bOpZwMSYI5FYxWhAlopALsr8RpUArOZWNXVMlsbo1JoltRbPzJg3eP8WAoVdSIbqSKBD4lHrfsWjoHvdi5iue2da-GcpvJe~spk~DqSjqBtISblPetYA__"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h2 className="text-4xl font-semibold text-primaryColor">
                  Contact us
                </h2>
              </div>
              <div className="pt-10 w-full space-y-5">
                <div className="w-full flex gap-5">
                  <input
                    className="w-full focus:outline-none px-5 py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Name/Surename*"
                    type="text"
                    name="name"
                    id=""
                  />
                  <input
                    className="w-full focus:outline-none px-5 py-4 border focus:border-[#050505CC] border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Email*"
                    type="email"
                    name="email"
                    id=""
                  />
                </div>
                <div className="w-full flex gap-5">
                  <input
                    className="w-full focus:outline-none px-5 py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Phone Number*"
                    type="number"
                    name="number"
                    id=""
                  />
                  <Select>
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
                <div className="w-full flex gap-5">
                  <input
                    className="w-full focus:outline-none px-5 py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Company Name*"
                    type="text"
                    name="companyName"
                    id=""
                  />
                  <Select>
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
                <div>
                  <Select>
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
                <div>
                  <Select>
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
                <div>
                  <textarea
                    rows={4}
                    className="w-full focus:outline-none px-5 py-4 focus:border-[#050505CC] border border-[#0505050F] rounded-md placeholder:text-[#5A5C5F]"
                    placeholder="Message*"
                    name="message"
                    id=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="first"
                className="cursor-pointer flex items-start gap-2"
              >
                <input
                  type="checkbox"
                  id="first"
                  name="first"
                  className="peer appearance-none size-[22px] mt-1 border border-green-400 rounded flex items-center justify-center"
                />
                <span className="ml-2 w-4/5 text-lg leading-[1.6]">
                  Consent to the receipt of news and benefits via emails, SMS,
                  applications, social media, telephones, and direct mails from{' '}
                  <br />
                  VGS International Corporation Co. Ltd.
                </span>
              </label>
              <label
                htmlFor="second"
                className="cursor-pointer flex items-start gap-2"
              >
                <input
                  type="checkbox"
                  id="second"
                  name="first"
                  className="peer appearance-none size-[22px] mt-1 border border-green-400 rounded flex items-center justify-center"
                />
                <span className="ml-2 w-4/5 text-lg leading-[1.6]">
                  Consent to sending of my personal data to VGS’s affiliates and
                  business partners to receive news and benefits via emails,
                  <br />
                  SMS, applications, social media, telephones, and direct mails.
                </span>
              </label>
            </div>
            <div className='mt-8'>
              <button type='submit'>
                <PrimaryButton title={"Submit"} />
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
