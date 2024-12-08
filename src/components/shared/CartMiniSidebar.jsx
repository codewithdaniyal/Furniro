"use client";

import Image from "next/image";
import closeButton from "../../../public/assets/all-image/mini cart sidebar/close cart.png";
import CardCartSidebar from "../cards/CardCartSidebar";
import productData from "../../../public/assets/data/products";
import { useEffect, useState } from "react";
import { convertToDummyCart } from "../../utils/format";

const CartMiniSidebar = (props) => {
  const [findProduct, setFindProduct] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [findData, setFindData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    const dataArray = JSON.parse(storedData);
    if (dataArray) {
      const temp = convertToDummyCart(dataArray);
      setFindData(temp);
      const data = [];
      temp.map((val1, id) => {
        const product = productData.findIndex(
          (val2) => val2.id == temp[id].productId
        );

        data.push({ ...productData[product], ...val1 });
      });
      setFindProduct(data);
    }
  }, []);

  useEffect(() => {
    let total = 0;
    findData.forEach((val) => {
      total += val.qty * val.pricePerItem;
    });
    setSubTotal(total);
    sessionStorage.setItem("total", JSON.stringify(total));

  }, [findData]);

  const handleDelete = (productId) => {
    const storedData = JSON.parse(localStorage.getItem("cart"));

    const updatedStoredData = storedData.filter(
      (item) => item.id !== productId
    );

    localStorage.setItem("cart", JSON.stringify(updatedStoredData));

    const updatedFindProduct = findProduct.filter(
      (item) => item.id !== productId
    );
    setFindProduct(updatedFindProduct);

    const updatedFindData = findData.filter(
      (item) => item.productId !== productId
    );
    setFindData(updatedFindData);
  };

  return (
    <div className="absolute right-0 top-0 bg-white md:w-[417px] w-full h-screen flex flex-col justify-between px-[33px] py-[28px] shadow z-50 ">
      <div>
        <div className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] w-[287px] mx-auto pb-[26px] mb-[42px]">
          <div className="text-left flex items-center ">
            <p className="text-[24px] font-semibold">Shopping Cart</p>
          </div>
          <Image
            src={closeButton}
            alt="close"
            className=" cursor-pointer"
            onClick={props.onHandleCloseButton}
          />
        </div>
        <div className="flex flex-col gap-[20px] h-full max-h-[350px] overflow-auto">
          {findProduct.length < 1 ? (
            <p className="text-center">Empty</p>
          ) : (
            findProduct.map((val, id) => (
              <CardCartSidebar
                key={id}
                data={val}
                onDelete={() => handleDelete(val.id)}
              />
            ))
          )}
        </div>
      </div>
      <div className="px-[]">
        <div className="flex justify-between">
          <p className="font-normal">Subtotal</p>
          <p className="font-base text-[#B88E2F]">
            Rp {subTotal.toLocaleString("id")}
          </p>
        </div>
        <div className="flex justify-end gap-2 mt-[23px] border-t-[1px] border-[#D9D9D9] pt-[26px]">
          <button
            className="px-[30px] py-[6px] border-[1px] border-black rounded-[50px] hover:bg-primary2"
            onClick={props.onCart}
          >
            Cart
          </button>
          <button
            className="px-[30px] py-[6px] border-[1px] border-black rounded-[50px] hover:bg-primary2"
            onClick={props.onCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartMiniSidebar;
