"use client";

import Banner from "../../components/ui/Banner";
import { CiFilter } from "react-icons/ci";
import { BsGrid } from "react-icons/bs";
import { MdOutlineViewDay } from "react-icons/md";
import productData from "../../../public/assets/data/products";
import Card from "../..//components/cards/Card";
import Pagination from "../../components/shared/Pagination";
import { useEffect, useState } from "react";
import { GrTrophy } from "react-icons/gr";
import { LuCheckCircle } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

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

const Shope = () => {
  const [page, setPage] = useState(1);
  const [dataShow, setDataShow] = useState([]);
  const [manyData, setManyData] = useState(0);
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

  useEffect(() => {
    const dataSlice = productData.slice(8 * page - 8, 8 * page);
    setManyData(dataSlice.length);
    setDataShow(dataSlice);
  }, [page]);

  return (
    <div>
      <Banner title="Shop" />
      <div className="h-[100px] bg-primary4 flex justify-between lg:px-32 px-4">
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center">
            <CiFilter size={24} />
            <span className="lg:text-[20px]">Filter</span>
          </div>
          <BsGrid size={24} />
          <MdOutlineViewDay size={24} />
          <h1 className="flex border-l-2 border-textColor3 items-center px-4 lg:text-base text-[10px]">
            Showing {manyData} of {productData.length} results
          </h1>
        </div>

        <div className="flex items-center py-8">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium  text-gray-900 dark:text-gray-400  items-center px-2 w-full text-end"
          >
            <h1 className="lg:text-base text-[10px]">Short by</h1>
          </label>
          <select
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 lg:text-sm text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Price</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-8 w-10/12 mx-auto">
        {dataShow.map((product) => (
          <Card
            key={product.id}
            img={product.img}
            name={product.name}
            shortDescription={product.shortDescription}
            price={product.price}
            isDiscount={product.isDiscount}
            discount={product.discount}
            link={`/products/${product.name}`}
            handleOuterDivClick={(event) => handleOuterDivClick(event, product)}
            handleAddToCart={(event) => handleAddToCart(event, product)}
          />
        ))}
      </div>
      <Pagination
        page={page}
        onClickPrevious={() => setPage(page - 1)}
        onClickNext={() => setPage(page + 1)}
      />
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

export default Shope;
