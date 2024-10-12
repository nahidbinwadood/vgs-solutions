import {
  EarningSvg,
  NetworkSvg,
  PartnerSvg,
} from '../../../Components/SvgContainer';

const Choose = () => {
  return (
    <div className="container mx-auto py-20 font-poppins">
      <div className="flex gap-12">
        <div className="w-1/2">
          <div className="h-full">
            <img
              className="h-full object-cover rounded-xl"
              src="https://s3-alpha-sig.figma.com/img/f8b9/f71e/574ab92b61bb1d6357f55f41a42a57eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RyLVVptyY6UT6pWFAM9Lcs~Amns2odyM8snH0YXvDoz75juaESCX5QtEQ5eVskoxmzPMp7YkzQt7mjbWjX9xI4pvnAkc87r9goKu5qmgj0kzc6Un7fmPzBNbLgycISso17z5Rzg1zsFMb-juT8fzS5cM5XRty9gW7rtvtmQq00A6wEyyM6Y5cNITg58ZoTZ8v5xiRy~M7yg1Wy4Chuy1vE8sC-E~nSwRYg~fjvg1pEy4LHQPRiZeyMFSXFBDRuHmscn-mX9Po54JRvSestKAH9mBHevTWe~lW8rL5UZtT-9jeR-40dJqjat7y4ulN~USU-6GvnA4rYckvZCFA9En4g__"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="space-y-2">
            <h3 className="text-lg text-primaryColor font-semibold">
              Why Choose us
            </h3>
            <h4 className="text-4xl font-semibold">Why Trust VGS for Your</h4>
            <h4 className="text-4xl font-semibold text-primaryColor">
              Sourcing Solutions?
            </h4>
            <p className="text-textColor w-3/4">
              Choose VGS for expert global sourcing solutions that minimize
              risks, maximize opportunities, and ensure reliable, cost-effective
              supplier partnerships. Our dedicated team provides tailored
              strategies for your business&apos;s growth and success.
            </p>
          </div>
          <div className="w-full pt-10 flex gap-6">
            <div className="w-[10%] h-full">
              <div>
                <div className="p-4 rounded-full bg-primaryColor">
                  <EarningSvg />
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="h-[80px] w-[2px] bg-primaryColor"></div>
                </div>
                <div className="p-4 rounded-full bg-primaryColor">
                  <PartnerSvg />
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="h-[80px] w-[2px] bg-primaryColor"></div>
                </div>
                <div className="p-4 rounded-full bg-primaryColor">
                  <NetworkSvg />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">
                  Earning and Maintaining Your Trust
                </h4>
                <p className="text-textColor w-3/4">
                  We understand that trust is fundamental to a successful
                  partnership, and we are committed to earning and maintaining
                  that trust with our clients.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Confidently Partner with Us</h4>
                <p className="text-textColor w-3/4">
                  By choosing us as their sourcing partner, you can be confident
                  that your business is in capable, trustworthy hands. Your
                  business is Our Business!!
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold">
                  Tailored Solutions Through Knowledge and Network
                </h4>
                <p className="text-textColor w-3/4">
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
    </div>
  );
};

export default Choose;
