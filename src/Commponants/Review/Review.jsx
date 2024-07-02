import React, { Component } from "react";
import Slider from "react-slick";
import First from "../../Image/client-img.png";

const reviewItems = [
  {
    id: 1,
    h5: "When looking",
    p: "it is a long established fact that a reader will be distracted by the readable content using Lorem ipsum is that it has a",
  },
  {
    id: 2,
    h5: "When looking",
    p: "it is a long established fact that a reader will be distracted by the readable content using Lorem ipsum is that it has a",
  },
  {
    id: 3,
    h5: "When looking",
    p: "it is a long established fact that a reader will be distracted by the readable content using Lorem ipsum is that it has a",
  },
];
function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="hidden md:block">
      <h1 className="text-[40px] text-[#242323] font-semibold my-[50px] text-center">
        Customers says
      </h1>
      <div className="slider-container overflow-hidden mt-[20px]">
        <Slider {...settings}>
          {reviewItems.map((item) => (
            <div key={item.id} className="ml-[40px] mb-[50px]">
              <div className="mt-[50px] h-[420px] w-[300px] bg-[#85a900] text-[#ffffff] rounded-lg">
                <img
                  src={First}
                  className="h-[153px] w-[153px] mt-[20px] ml-[73px]"
                  alt=""
                />
                <h5 className="text-[24px] mt-[60px] mb-[30px] text-center">
                  {item.h5}
                </h5>
                <p className="text-[18px] text-center px-[15px]">{item.p}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PauseOnHover;
