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
    { logo: <SponsorLogo1 key="1" />, name: 'Sponsor 1' },
    { logo: <SponsorLogo2 key="2" />, name: 'Sponsor 2' },
    { logo: <SponsorLogo3 key="3" />, name: 'Sponsor 3' },
    { logo: <SponsorLogo4 key="4" />, name: 'Sponsor 4' },
    { logo: <SponsorLogo5 key="5" />, name: 'Sponsor 5' },
  ];

  return (
    <section
      className="container mx-auto py-10 lg:py-16 xl:py-20 overflow-hidden px-5 md:px-7"
      aria-labelledby="sponsors-heading"
    >
      {/* Heading for SEO */}
      <h2 id="sponsors-heading" className="sr-only">
        Our Sponsors
      </h2>

      <Marquee autoFill={true} speed={70}>
        {[...sponsors, ...sponsors].map((item, idx) => (
          <div key={idx} className="sm:mr-4 md:mr-20 lg:mr-32">
            <figure
              aria-label={item.name}
              className="flex items-center justify-center"
            >
              {item.logo}
              <figcaption className="sr-only">{item.name}</figcaption>
            </figure>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
