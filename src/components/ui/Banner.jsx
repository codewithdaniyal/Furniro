"use client";

import RectangleImage from "../../../public/Rectangle1.png"; // Import Rectangle 1.png
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Banner = (props) => {
  const router = useRouter();
  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${RectangleImage.src})`, // Use RectangleImage as the background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="py-32">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">{props.title}</h1>
            <p className="mt-2 text-lg flex items-center">
              <span
                className="cursor-pointer hover:text-primary2"
                onClick={() => router.push("/")}
              >
                Home
              </span>
              <FaChevronRight className="mx-2" />
              <span className="cursor-pointer">{props.title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
