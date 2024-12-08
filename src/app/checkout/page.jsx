"use client";

import Banner from "../../components/ui/Banner";
import Billings from "../../components/forms/Billings";
import { formatToRupiah } from "../../utils/format";
import { useEffect, useState } from "react";
import { convertToDummyCart } from "../../utils/format";

const Checkout = () => {
  const [total, setTotal] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem("cart");
    const dataArray = JSON.parse(storedData);
    const storedTotal = sessionStorage.getItem("total");
    const dataTotal = JSON.parse(storedTotal);
    setData(convertToDummyCart(dataArray));
    setTotal(dataTotal);
  }, []);

  console.log(data);

  return (
    <div>
      <Banner title="Checkout" />
      <div className="md:flex justify-between lg:p-32 md:p-8 p-4 md:flex-row flex-col">
        <Billings />
        <div className="md:w-1/2 md:px-16 px-4">
          <div className="flex justify-between mt-12">
            <h1 className="font-medium text-[24px]">Product</h1>
            <h1 className="font-medium text-[24px]">Subtotal</h1>
          </div>
          {/* Product Looping dari local storage */}
          {data && data.length > 0 ? (
            <>
              {/* Product Looping dari local storage */}
              {data.map((item, index) => (
                <div key={index} className="flex justify-between mt-4">
                  <h1 className="text-[16px] text-textColor4">
                    {item.name}
                    <span className="font-medium text-[12px] text-black mx-4">
                      x{item.qty}
                    </span>
                  </h1>
                  <h1>{formatToRupiah(item.pricePerItem * item.qty)}</h1>
                </div>
              ))}
              {/* Total */}
              <div className="flex justify-between mt-4">
                <h1 className="text-[16px] text-black">Subtotal</h1>
                <h1>{formatToRupiah(total || 0)}</h1>
              </div>
              {/* Subtotal */}
              <div className="flex justify-between mt-4">
                <h1 className="text-[16px] text-black">Total</h1>
                <h1 className="text-primary2 font-bold text-[24px]">
                  {formatToRupiah(total || 0)}
                </h1>
              </div>
            </>
          ) : (
            <p className="text-center">Loading...</p>
          )}

          <hr className="mt-8 border-t-2 " />
          <div className="flex flex-col mt-8">
            <div className="flex items-center">
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                className="rounded-full h-6 w-6 checked:bg-black checked:border-transparent border-black"
              />
              <label htmlFor="bankTransfer" className="ml-2 text-base">
                Direct Bank Transfer
              </label>
            </div>
            <p className="ml-8 mt-2 font-light text-base text-textColor4">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className="flex items-center mt-4">
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                className="rounded-full h-6 w-6 checked:bg-black checked:border-transparent border-black"
              />
              <label htmlFor="cashOnDelivery" className="ml-2 text-base">
                Cash On Delivery
              </label>
            </div>
            <p className="ml-8 mt-2 font-light text-base text-textColor4">
              For cash on delivery orders, please have the exact amount ready
              upon delivery. Our delivery agent will collect the payment when
              delivering your order.
            </p>
          </div>
          <p className="font-light mt-8">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <span className="font-semibold"> privacy policy</span>.
          </p>
          <div className="flex w-full justify-center mt-[40px]">
            <button className="px-[102px] py-[17px] border-2 border-black rounded-[15px]">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
