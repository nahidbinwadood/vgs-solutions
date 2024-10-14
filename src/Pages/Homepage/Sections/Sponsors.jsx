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
    <SponsorLogo1 key="1" />,
    <SponsorLogo2 key="2" />,
    <SponsorLogo3 key="3" />,
    <SponsorLogo4 key="4" />,
    <SponsorLogo5 key="5" />,
  ];
  return (
    <section className="container mx-auto py-10 lg:py-16 xl:py-20 overflow-hidden px-5 md:px-7">
      <Marquee autoFill={true} speed={70}>
        {[...sponsors, ...sponsors].map((item, idx) => (
          <div key={idx} className="sm:mr-4 md:mr-20 lg:mr-32">
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
