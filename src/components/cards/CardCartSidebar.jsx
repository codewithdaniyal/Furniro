import Image from "next/image";
import deleteCart from "../../../public/assets/all-image/mini cart sidebar/delete cart.png";
const CardCartSidebar = (props) => {
  const { data, onDelete } = props;
  return (
    <div className="flex justify-between">
      <Image src={data.img} alt="media" className="w-[108px] h-[105px]" />
      <div className="flex flex-col justify-center gap-2">
        <p className=" font-normal text-base">{data.name}</p>
        <p className="text-base">
          {data.qty} x{" "}
          <span className="text-sm text-[#B88E2F]">
            Rp {data.price.toLocaleString("id")}
          </span>
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={deleteCart}
          alt="delete"
          className="cursor-pointer hover:opacity-60"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default CardCartSidebar;
