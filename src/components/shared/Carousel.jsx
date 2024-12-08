"use client";

import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80",
      title: "Hello world",
      description: "lorem ipsum dolor sit amet",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Hello world",
      description: "lorem ipsum dolor sit amet",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="sliderAx h-auto relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`container mx-auto ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <div
            className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="md:w-1/2">
              <p className="font-bold text-sm uppercase">Services</p>
              <p className="text-3xl font-bold">{slide.title}</p>
              <p className="text-2xl mb-10 leading-none">{slide.description}</p>
              <a
                href="#"
                className="bg-primary2 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
              >
                Contact us
              </a>
            </div>
          </div>
          <br />
        </div>
      ))}
      <div className="flex justify-between w-12 mx-auto pb-2 absolute bottom-0 left-0 right-0">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`bg-primary2 rounded-full w-4 pb-2 ${
              index === currentSlide ? "bg-primary2" : ""
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
