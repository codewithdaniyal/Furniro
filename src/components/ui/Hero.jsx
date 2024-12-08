"use client";
import BannerImage from "../../../public/assets/all-image/main-banner.png";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{
        backgroundImage: `url(${BannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-primary1 md:w-[643px] md:h-[443px] w-10/12 h-10/12 py-2 rounded-lg absolute bottom-32 right-12 px-12 flex flex-col justify-center">
        <h1 className="font-semibold text-[16px] tracking-[3px] text-textColor1 ">
          New Arrival
        </h1>
        <h1 className="text-primary2 font-bold md:text-[52px] text-[32px] ">
          Discover Our New Collection
        </h1>
        <p className="text-textColor1 font-semibold md:text-[16px] text-[12px] md:my-0 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          className="bg-primary2 font-semibold text-white md:py-[25px] md:px-[72px] py-4  w-5/12 md:mt-[46px] mt-4 md:mb-0 mb-4 hover:bg-gray-200 hover:text-gray-800 hover:font-bold"
          onClick={() => router.push("/shop")}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
