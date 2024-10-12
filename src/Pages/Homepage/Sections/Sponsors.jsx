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
    <section className="container mx-auto py-20 overflow-hidden">
      <Marquee autoFill={true} speed={80}>
        {[...sponsors, ...sponsors].map((item,idx) => (
          <div key={idx} className="mr-24">
            {item}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
