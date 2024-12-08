"use client";

import Hero from "../components/ui/Hero";
import CategoryHome from "../components/ui/CategoryHome";
import productData from "../../public/assets/data/products";
import Card from "../components/cards/Card";
import Carousel from "../components/shared/Carousel";
import Image from "next/image";
import Banner from "../../public/assets/all-image/setup-banner.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const productDataSubset = productData.slice(0, 8);
  const router = useRouter();

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const find = cart.find((item) => item.name === product.name);
    if (!find) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const handleOuterDivClick = (event, product) => {
    event.preventDefault();
    router.push(`/products/${product.name}`);
  };

  return (
    <main>
      <Hero />
      <CategoryHome />
      <div className="lg:w-10/12 w-full mx-auto mt-[56px]">
        <h1 className="font-bold text-[40px] text-center">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-4 gap-1 mt-8 lg:w-full w-11/12 mx-auto">
          {productDataSubset.map((product) => (
            <Card
              key={product.id}
              img={product.img}
              name={product.name}
              shortDescription={product.shortDescription}
              price={product.price}
              isDiscount={product.isDiscount}
              discount={product.discount}
              link={`/products/${product.name}`}
              handleOuterDivClick={(event) =>
                handleOuterDivClick(event, product)
              }
              handleAddToCart={(event) => handleAddToCart(event, product)}
            />
          ))}
        </div>
        <div className="w-[245px] h-[48px] mx-auto mt-8">
          <button
            className="border border-primary2 font-semibold text-[16px] text-primary2 px-[74px] py-[12px] "
            onClick={() => router.push("/shop")}
          >
            Show More
          </button>
        </div>
      </div>

      {/* Section 4 */}
<div className="mb-[100px] mt-[64px] bg-[#FCF8F3] lg:w-screen sm:w-[1024px] md:w-[1124px] w-[960px] flex">
  <div className="pl-[100px] pt-[223px] pb-[233px]">
    <h1 className="text-[40px] font-bold">
      50+ Beautiful rooms <br /> inspiration
    </h1>
    <p className="pt-[7px] text-base font-medium text-[#616161]">
      Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you
    </p>
    <button className="bg-[#B88E2F] text-[#FFFFFF] px-[36px] py-[12px] text-base font-semibold mt-[26px]">
      Explore More
    </button>
  </div>
  <div className="flex gap-[20px] pt-[44px] pr-[42px] pl-[100px]">
    <div>
      <img src="/S31.png" alt="" />
    </div>
    <div>
      <img src="/S32.png" alt="" />
    </div>
  </div>
</div>


      <div>
        <h1 className="font-semibold text-[20px] text-center">
          Share your setup with
        </h1>
        <h1 className="text-[40px] font-bold text-center">#FurniroFurniture</h1>
        <Image src={Banner} alt="image" className="w-screen mb-16" />
      </div>
    </main>
  );
}
