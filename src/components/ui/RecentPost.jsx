import Image from "next/image";

const RecentPost = (props) => {
  return (
    <div className="flex items-center space-x-2 my-4">
      <Image
        src={props.img}
        alt={props.title}
        className="w-[80px] h-[80px] object-cover rounded-[10px]"
      />
      <div>
        <h1 className="text-[14px] ">{props.title}</h1>
        <p className="text-[12px] text-textColor4">{props.date}</p>
      </div>
    </div>
  );
};

export default RecentPost;
