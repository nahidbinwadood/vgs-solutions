import {
  EarningSvg,
  NetworkSvg,
  PartnerSvg,
} from '../../../Components/SvgContainer';

const Choose = () => {
  return (
    <section
      aria-labelledby="why-choose-us"
      className="py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 container mx-auto "
    >
      <div className="flex items-stretch flex-col lg:flex-row gap-6 lg:gap-12 px-5 md:px-7">
        <div className="lg:w-1/2">
          <div className="h-full">
            <img
              className="h-full object-cover rounded-xl"
              src="https://s3-alpha-sig.figma.com/img/f8b9/f71e/574ab92b61bb1d6357f55f41a42a57eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyLVVptyY6UT6pWFAM9Lcs~Amns2odyM8snH0YXvDoz75juaESCX5QtEQ5eVskoxmzPMp7YkzQt7mjbWjX9xI4pvnAkc87r9goKu5qmgj0kzc6Un7fmPzBNbLgycISso17z5Rzg1zsFMb-juT8fzS5cM5XRty9gW7rtvtmQq00A6wEyyM6Y5cNITg58ZoTZ8v5xiRy~M7yg1Wy4Chuy1vE8sC-E~nSwRYg~fjvg1pEy4LHQPRiZeyMFSXFBDRuHmscn-mX9Po54JRvSestKAH9mBHevTWe~lW8rL5UZtT-9jeR-40dJqjat7y4ulN~USU-6GvnA4rYckvZCFA9En4g__"
              alt="Collaborative team discussion in the office"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="md:space-y-2">
            <h2
              id="why-choose-us"
              className="md:text-lg text-primaryColor font-semibold"
            >
              Why Choose Us
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pt-1 md:pt-0">
              Why Trust VGS for Your
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primaryColor">
              Sourcing Solutions?
            </h3>
            <p className="text-textColor text-sm md:text-base xl:w-3/4 pt-2">
              Choose VGS for expert global sourcing solutions that minimize
              risks, maximize opportunities, and ensure reliable, cost-effective
              supplier partnerships. Our dedicated team provides tailored
              strategies for your business's growth and success.
            </p>
          </div>

          {/* Icons and Descriptions */}
          <div className="w-full pt-6 md:pt-10 flex gap-4">
            <div className="w-[12%] h-full hidden md:flex items-center justify-center">
              <div>
                <div className="w-full flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primaryColor">
                    <EarningSvg aria-label="Earning Trust Icon" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="h-[70px] lg:h-[105px] 2xl:h-[85px] w-[2px] bg-primaryColor"></div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primaryColor">
                    <PartnerSvg aria-label="Partnership Icon" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="h-[70px] lg:h-[105px] 2xl:h-[75px] w-[2px] bg-primaryColor"></div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="p-3 rounded-full bg-primaryColor">
                    <NetworkSvg aria-label="Network Icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5 md:gap-10 lg:gap-8">
              <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="font-semibold md:text-lg">
                  Earning and Maintaining Your Trust
                </h4>
                <p className="text-textColor text-sm md:text-base xl:w-3/4">
                  We understand that trust is fundamental to a successful
                  partnership, and we are committed to earning and maintaining
                  that trust with our clients.
                </p>
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="font-semibold md:text-lg">
                  Confidently Partner with Us
                </h4>
                <p className="text-textColor text-sm md:text-base xl:w-3/4">
                  By choosing us as their sourcing partner, you can be confident
                  that your business is in capable, trustworthy hands. Your
                  business is Our Business!
                </p>
              </div>
              <div className="flex flex-col gap-1 md:gap-2">
                <h4 className="font-semibold md:text-lg">
                  Tailored Solutions Through Knowledge and Network
                </h4>
                <p className="text-textColor text-sm md:text-base xl:w-3/4">
                  With our knowledge and a vast network of reliable suppliers,
                  we strive to deliver high-quality products tailored to your
                  needs. We prioritize transparency and timely communication in
                  all our dealings, providing clients with clear insights into
                  our sourcing processes, timelines, and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
