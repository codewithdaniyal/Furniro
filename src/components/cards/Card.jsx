"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { formatToRupiah } from "../../utils/format";
import Link from "next/link";

const Card = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="lg:w-[285px] lg:h-[446px] w-[155px] h-[255px] relative overflow-hidden mx-auto lg:my-0 my-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        <Image
          src={props.img}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Link href={props.link || "/"}>
        <div className="bg-primary3 lg:px-[15px] lg:py-[16px] py-4 px-2 absolute bottom-0 left-0 right-0 cursor-pointer">
          <h1 className="font-semibold lg:text-[24px] text-[10px] ">
            {props.name}
          </h1>
          <p className="text-textColor2 font-medium lg:text-[16px] text-[8px] ">
            {props.shortDescription}
          </p>
          <h1 className="flex justify-between items-center">
            <span className="lg:text-[20px] text-[10px] font-semibold">
              {formatToRupiah(props.price)}
            </span>
            {props.isDiscount && (
              <s className="lg:text-[16px] text-[8px] text-[#B0B0B0]">
                <span>
                  {formatToRupiah((props.price * props.discount) / 100)}
                </span>
              </s>
            )}
          </h1>
        </div>
      </Link>

      {isHovered && (
        <div
          onClick={props.handleOuterDivClick}
          className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-center items-center"
        >
          <div className="bg-white text-[16px] text-primary2 font-semibold lg:py-[12px] py-[4px] lg:px-[52px] px-[16px] shadow-md hover:shadow-lg transition-shadow duration-300">
            <button
              className="mr-2 lg:text-base text-[10px]"
              onClick={props.handleAddToCart}
            >
              Add to cart
            </button>
          </div>
          <div className="flex my-4">
            <FaShareAlt
              className="mr-8 cursor-pointer"
              size={24}
              color="white"
            />
            <FaHeart className="cursor-pointer" size={24} color="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
