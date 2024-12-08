import Input from "../shared/Input";
import { HiMiniMapPin } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Email = () => {
  return (
    <div className="w-10/12 mx-auto flex md:flex-row flex-col-reverse justify-between lg:px-32">
      <div className="w-auto mx-auto mt-4">
        <div className="flex space-x-4">
          <HiMiniMapPin size={36} />
          <div className="mt-2">
            <h1 className="lg:text-[24px] font-medium">Address</h1>
            <h2 className="lg:text-[16px] text-[10px] w-1/2">
              236 5th SE Avenue, New York NY10000, United States
            </h2>
          </div>
        </div>
        <div className="flex space-x-4 my-8">
          <FaPhoneAlt size={36} />
          <div className="mt-2">
            <h1 className="lg:text-[24px] font-medium">Phone</h1>
            <h2 className="lg:text-[16px] text-[10px] w-1/2">
              Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
            </h2>
          </div>
        </div>
        <div className="flex space-x-4 my-8">
          <FaClock size={36} />
          <div className="mt-2">
            <h1 className="lg:text-[24px] font-medium">Working Time</h1>
            <h2 className="lg:text-[16px] text-[10px] w-full">
              Monday-Friday: 9:00 - 22:00
            </h2>
            <h2 className="lg:text-[16px] text-[10px] w-full">
              Saturday-Sunday: 9:00 - 21:00
            </h2>
          </div>
        </div>
      </div>
      <div>
        <Input label="Your Name" />
        <div className="mt-8">
          <Input label="Email Address" />
        </div>
        <div className="mt-8">
          <Input label="Subject" />
        </div>
        <div className="mt-8">
          <Input label="Message" />
        </div>
        <div>
          <button className="bg-primary2 text-white px-[88px] py-[13px] rounded-[5px] my-[50px] hover:bg-gray-200 hover:text-gray-800 hover:font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
