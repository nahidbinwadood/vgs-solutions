import Marquee from 'react-fast-marquee';
import {
  SponsorLogo1,
  SponsorLogo2,
  SponsorLogo3,
  SponsorLogo4,
  SponsorLogo5,
} from '../../../Components/SvgContainer';

const Sponsors = () => {
  const sponsors = [
    {
      logo: 'https://www.harrisons.com.my/wp-content/uploads/2020/04/sh7.jpg',
      name: 'Sponsor 1',
    },
    {
      logo: 'https://www.harrisons.com.my/wp-content/uploads/2020/04/sh1.jpg',
      name: 'Sponsor 2',
    },
    {
      logo: 'https://www.harrisons.com.my/wp-content/uploads/2020/04/sh3.jpg',
      name: 'Sponsor 3',
    },
    {
      logo: 'https://www.harrisons.com.my/wp-content/uploads/2020/04/sh5.jpg',
      name: 'Sponsor 4',
    },
    {
      logo: 'https://www.harrisons.com.my/wp-content/uploads/2020/04/sh8.jpg',
      name: 'Sponsor 5',
    },
  ];

  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="1800"
      className="container mx-auto py-10 lg:py-16  overflow-hidden px-5 md:px-7"
      aria-labelledby="sponsors-heading"
    >
      {/* Heading for SEO */}
      <h2 id="sponsors-heading" className="sr-only">
        Our Sponsors
      </h2>

      <Marquee autoFill={true} speed={70}>
        {[...sponsors, ...sponsors].map((item, idx) => (
          <div key={idx} className="sm:mr-4 md:mr-12 lg:mr-20">
            <figure
              aria-label={item.name}
              className="flex items-center justify-center"
            >
              <img className='h-24 w-40' src={item?.logo} alt="" />
            </figure>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
