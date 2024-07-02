import React from "react";
import CountUp from "react-countup";

function Custumer() {
  return (
    <>
      <div className="mt-[-91px] mb-[50px] flex items-center  justify-center">
        <div className="md:w-[888px] bg-[#fefefe] rounded-lg md:flex items-center justify-evenly custumer-box py-[40px] px-[100px]">
          <div>
            <div className="flex text-[40px] text-[#4a8216]">
              <CountUp end={25} duration={5} />
              <p>+</p>
            </div>
            <p className="text-[14px] text-[#4a8216]">
              Year <br /> Exciperince
            </p>
          </div>
          <div>
            <div className="flex text-[40px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              <CountUp end={250} duration={5} />
              <p>+</p>
            </div>
            <p className="text-[14px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              Happy <br /> Customers
            </p>
          </div>
          <div>
            <div className="flex text-[40px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              <CountUp end={2} duration={5} />
              <p>+</p>
            </div>
            <p className="text-[14px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              Our <br /> Awards
            </p>
          </div>
          <div>
            <div className="flex text-[40px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              <CountUp end={25} duration={5} />
              <p>+</p>
            </div>
            <p className="text-[14px] text-[#A8A7A7] hover:text-[#4a8216] duration-500 transition-all">
              Landscapeing <br /> Work done
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Custumer;
