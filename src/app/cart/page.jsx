"use client";

import Banner from "../../components/ui/Banner";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { formatToRupiah } from "../../utils/format";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { convertToDummyCart } from "../../utils/format";
import productData from "../../../public/assets/data/products";

const Cart = () => {
  const router = useRouter();
  const [findProduct, setFindProduct] = useState([]);
  const [findData, setFindData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

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

      let subTotalAmount = 0;

      data.forEach((product) => {
        subTotalAmount += product.pricePerItem * product.qty;
      });

      setSubtotal(subTotalAmount);
      setTotal(subTotalAmount);
    }
  }, []);

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

    let subTotalAmount = 0;
    updatedFindProduct.forEach((product) => {
      subTotalAmount += product.pricePerItem * product.qty;
    });

    setSubtotal(subTotalAmount);
    setTotal(subTotalAmount);
  };

  return (
    <div>
      <Banner title="Cart" />
      <div className="flex md:flex-row md:space-x-4 flex-col lg:m-16 m-4 justify-between">
        <div className="md:w-8/12 w-full">
          {findData && findData.length > 0 ? (
            <table className="w-full rounded-lg">
              <thead className="bg-[#F9F1E7] text-black rounded-lg">
                <tr>
                  <th className="md:py-4 md:px-4 px-1 py-1 border-0 text-[12px]">
                    Preview
                  </th>
                  <th className="md:py-2 md:px-4 border-0 text-[12px]">
                    Products
                  </th>
                  <th className="md:py-2 md:px-4 border-0 text-[12px]">
                    Price
                  </th>
                  <th className="md:py-2 md:px-4 border-0 text-[12px]">
                    Quantity
                  </th>
                  <th className="md:py-2 md:px-4 border-0 text-[12px]">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {findProduct.map((product) => (
                  <tr key={product.id}>
                    <td className="flex justify-center items-center py-2">
                      <Image
                        src={product.img}
                        className="w-[80px] h-[80px] rounded-lg"
                        alt={product.name}
                      />
                    </td>
                    <td className="text-center py-2 text-textColor4 text-[8px] lg:text-base md:text-[10px]">
                      {product.name}
                    </td>
                    <td className="text-center py-2 text-textColor4 text-[8px] lg:text-base md:text-[10px]">
                      {formatToRupiah(product.pricePerItem)}
                    </td>
                    <td className="text-center py-2 text-[8px] lg:text-base md:text-[10px]">
                      {product.qty}
                    </td>
                    <td className="text-center py-2 text-[8px] lg:text-base md:text-[10px]">
                      <h1 className="flex justify-center items-center md:space-x-2 text-[8px] lg:text-base md:text-[10px]">
                        <span>
                          {formatToRupiah(product.pricePerItem * product.qty)}
                        </span>
                        <span className="text-primary2 md:text-[24px] text-[12px]">
                          <CiTrash onClick={() => handleDelete(product.id)} />
                        </span>
                      </h1>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">
              Your cart is empty. Add some items to get started!
            </p>
          )}
        </div>
        <div className="bg-[#F9F1E7] md:px-16">
          <h1 className="mt-4 font-semibold md:text-[32px] text-[20px]  text-center">
            Cart Totals
          </h1>
          <div className=" md:block flex justify-center flex-col md:px-0 px-4">
            <div className="md:mt-8 my-2">
              <h1 className="flex text-[16px]  justify-between w-full space-x-12">
                <span className="font-medium">Subtotal</span>
                <span className="text-textColor4 ">
                  {formatToRupiah(subtotal)}
                </span>
              </h1>
              <h1 className="flex text-[16px] justify-between w-full space-x-12 md:my-4">
                <span>Total</span>
                <span className="font-medium text-primary2 text-[20px]">
                  {formatToRupiah(total)}
                </span>
              </h1>
            </div>
            <div
              onClick={() => {
                router.push("/checkout");
                sessionStorage.setItem("total", JSON.stringify(total));
              }}
              className="md:-[215px] md:h-[64px] text-[20px] md:px-0 md:py-0 px-2 py-2  border-[1px] rounded-[10px] border-textColor4 flex justify-center items-center hover:bg-primary5 cursor-pointer  md:my-8 my-4"
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
