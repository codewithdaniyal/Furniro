import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Pagination = ({ page, onClickNext, onClickPrevious }) => {
  const totalPages = 2;
  const router = useRouter();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-16">
      <div className="flex items-center justify-center space-x-2">
        <button
          className={`px-4 py-2 ${
            page === 1 ? "bg-gray-300" : " bg-primary5"
          } text-black rounded-lg`}
          onClick={() => {
            onClickPrevious();
            scrollToTop();
          }}
          disabled={page === 1}
        >
          <Link href={"#"}>Previous</Link>
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={` ${
              index + 1 === page ? "bg-primary2" : "bg-primary5"
            } px-4 py-2 text-white rounded-lg`}
          >
            {index + 1}
          </div>
        ))}
        <button
          className={`px-4 py-2 ${
            page === totalPages ? "bg-gray-300 " : "bg-primary5"
          } text-black rounded-lg`}
          onClick={() => {
            onClickNext();
            scrollToTop();
          }}
          disabled={page === totalPages}
        >
          <Link href={"#"}>Next</Link>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
