"use client";

import Banner from "../../components/ui/Banner";
import Article from "../../components/ui/Article";
import ArticleData from "../../../public/assets/data/article";
import SearchComponent from "../../components/ui/Seacrhbar";
import RecentPost from "../../components/ui/RecentPost";
import { GrTrophy } from "react-icons/gr";
import { LuCheckCircle } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import PaginationBackup from "../../components/shared/PaginationBackup";

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

const Blog = () => {
  const [page, setPage] = useState(1);
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    const dataSlice = ArticleData.slice(3 * page - 3, 3 * page);
    setDataShow(dataSlice);
  }, [page]);

  return (
    <div>
      <Banner title="Blog" />
      <div className="md:hidden my-4 w-11/12 mx-auto">
        <SearchComponent />
        <h1 className="text-center mt-8 font-medium text-[24px]">Categories</h1>
        <ul className="flex flex-col space-y-4 mt-4">
          <li className="flex justify-between text-textColor4 text-[16px]">
            <span>Crafts</span> <span>2</span>
          </li>
          <li className="flex justify-between text-textColor4 text-[16px]">
            <span>Design</span> <span>1</span>
          </li>
          <li className="flex justify-between text-textColor4 text-[16px]">
            <span>Handmade</span> <span>7</span>
          </li>
          <li className="flex justify-between text-textColor4 text-[16px]">
            <span>Interior</span> <span>5</span>
          </li>
          <li className="flex justify-between text-textColor4 text-[16px]">
            <span>Wood</span> <span>4</span>
          </li>
        </ul>
      </div>
      <div className="lg:my-[106px] my-16 flex justify-between lg:w-10/12 mx-auto lg:flex-row flex-col">
        <div className="lg:w-8/12 w-11/12 lg:mx-0 mx-auto">
          {dataShow.slice(0, 3).map((article, index) => (
            <Article
              key={index}
              img={article.img}
              alt={article.title}
              author={article.author}
              date={article.publisDate}
              category={article.tag}
              preview={article.description}
              title={article.title}
            />
          ))}
        </div>
        <div className="hidden md:block">
          <SearchComponent />
          <h1 className="text-center mt-8 font-medium text-[24px]">
            Categories
          </h1>
          <ul className="flex flex-col space-y-4 mt-4">
            <li className="flex justify-between text-textColor4 text-[16px]">
              <span>Crafts</span> <span>2</span>
            </li>
            <li className="flex justify-between text-textColor4 text-[16px]">
              <span>Design</span> <span>1</span>
            </li>
            <li className="flex justify-between text-textColor4 text-[16px]">
              <span>Handmade</span> <span>7</span>
            </li>
            <li className="flex justify-between text-textColor4 text-[16px]">
              <span>Interior</span> <span>5</span>
            </li>
            <li className="flex justify-between text-textColor4 text-[16px]">
              <span>Wood</span> <span>4</span>
            </li>
          </ul>
          <h1 className="text-center mt-8 font-medium text-[24px]">
            Recent Post
          </h1>
          <div className="mt-4">
            {ArticleData.map((article, index) => (
              <RecentPost
                key={index}
                img={article.img}
                title={article.title}
                date={article.publisDate}
              />
            ))}
          </div>
        </div>
      </div>

      <PaginationBackup
        page={page}
        onClickPrevious={() => setPage(page - 1)}
        onClickNext={() => setPage(page + 1)}
      />

      <div className="mt-4 md:hidden w-11/12 mx-auto">
        {ArticleData.map((article, index) => (
          <RecentPost
            key={index}
            img={article.img}
            title={article.title}
            date={article.publisDate}
          />
        ))}
      </div>

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

export default Blog;
