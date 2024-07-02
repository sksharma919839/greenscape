import React from "react";
import { Link } from "react-router-dom";

function Aboutcom() {
  return (
    <>
      <div className="about-bg sm:h-[561px] h-auto sm:pb-0 pb-[80px]">
        <div>
          <div className="sm:w-[620px] px-[80px] mt-[0px] pt-[120px]">
            <h1 className="text-[40px] text-[#fefefd] font-semibold pb-[20px]">
              About Us
            </h1>
            <p className="text-[16px] text-[#fefefd] mb-[70px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as
            </p>
            <Link
              to="/about"
              className="text-[16px] text-[#fefefd] bg-[#85a900] py-[15px] px-[40px] transition-all duration-700 hover:bg-[#fefefd] hover:text-[#000000]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcom;
