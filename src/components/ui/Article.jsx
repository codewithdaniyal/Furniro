import Image from "next/image";
import { MdPerson } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";

const Article = (props) => {
  return (
    <div className="mb-8">
      <Image src={props.img} alt={props.alt} />
      <div className="flex mt-4 space-x-2">
        <div className="flex items-center justify-center space-x-1">
          <MdPerson className="lg:text-[16px] text-[10px] text-textColor4 " />
          <h1 className="lg:text-[16px] text-[10px] text-textColor4 ">
            {props.author}
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <FaCalendar className="lg:text-[16px] text-[10px] text-textColor4 " />
          <h1 className="lg:text-[16px] text-[10px] text-textColor4 ">
            {props.date}
          </h1>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <FaTag className="lg:text-[16px] text-[10px] text-textColor4 " />
          <h1 className="lg:text-[16px] text-[10px] text-textColor4 ">
            {props.category}
          </h1>
        </div>
      </div>
      <h1 className="my-4 font-medium text-[30px]">{props.title}</h1>
      <p className="lg:text-[15px] text-[10px] text-textColor4">
        {props.preview}
      </p>
      <button className="mt-2 border-b-2 border-black hover:font-bold">
        Read more
      </button>
    </div>
  );
};

export default Article;
