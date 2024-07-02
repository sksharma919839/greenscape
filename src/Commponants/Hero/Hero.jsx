import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero-bg mt-[-108px]">
        <div className="w-auto sm:w-[615px] pt-[158px] pb-[200px] sm:px-[100px] px-[20px]">
          <h1 className="sm:text-[60px] text-[48px] text-[#fefefe] font-semibold mb-[20px]">
            We Provid Landscaping
          </h1>
          <p className="text-[16px] text-[#ffffff] mb-[60px]">
            long established fact that a reader will be distracted by the
            readable content of a pagelong established fact that a reader will
            be distracted by the readable content of a page
          </p>
          <Link
            to="/about"
            className="bg-[#fefefd] text-[16px] text-[#77a01d] py-[15px] sm:px-[40px] px-[20px] hover:bg-[#202420] hover:text-[#fefefd] sm:mx-[10px] transition-all duration-500"
          >
            READ MORE
          </Link>
          <Link
            to="/contact"
            className="bg-[#202420] text-[16px] mx-[10px] text-[#FEFEFD] py-[15px] sm:px-[40px] px-[20px]"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
