import Banner from "../../components/ui/Banner";
import Email from "../../components/forms/Email";
import { GrTrophy } from "react-icons/gr";
import { LuCheckCircle } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const items = [
  {
    icon: <GrTrophy className="text-[32px] lg:text-[42px]" />,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    icon: <LuCheckCircle className="text-[32px] lg:text-[42px]" />,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: <TbTruckDelivery className="text-[32px] lg:text-[42px]" />,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: <RiCustomerService2Line className="text-[32px] lg:text-[42px]" />,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const Contact = () => {
  return (
    <div>
      <Banner title="Contact" />
      <h1 className="lg:text-[36px] text-[28px] font-semibold text-center lg:mt-[96px] mt-8">
        Get In Touch With Us
      </h1>
      <p className="lg:text-[16px] text-[12px] text-textColor4 text-center lg:w-1/2 w-9/12 mx-auto">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
      <div className="mt-16">
        <Email />
      </div>
      <div className="w-full bg-primary5 lg:py-24 py-4">
        <div className="flex w-10/12 mx-auto justify-between">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {item.icon}
              <div className="lg:mx-4 mx-2">
                <h1 className="font-semibold lg:text-[25px] text-[8px]">
                  {item.title}
                </h1>
                <p className="font-medium lg:text-[20px] text-[6px] text-textColor4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
