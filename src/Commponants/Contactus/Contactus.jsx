import React from "react";

function Contactus() {
  return (
    <>
      <div className="contact-bg">
        <h1 className="text-[#353434] text-[40px] font-semibold text-center py-[80px]">
          Requeste A call Back
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <div>
              <input
                className="sm:w-[349px] w-[280px] mx-[15px] h-[58px] md:my-0 my-[20px] py-[14px] px-[15px] border border-[#C4C4C3] text-[#C4C4C3]"
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
              <input
                className="sm:w-[349px] w-[280px] mx-[15px] h-[58px] md:my-0 my-[20px] py-[14px] px-[15px] border border-[#C4C4C3] text-[#C4C4C3]"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="sm:w-[349px] w-[280px] mx-[15px] h-[58px] md:my-0 my-[20px] py-[14px] px-[15px] border border-[#C4C4C3] text-[#C4C4C3]"
                type="number"
                name="number"
                id=""
                placeholder="Phone Number"
              />
              <input
                className="sm:w-[349px] w-[280px] mx-[15px] md:my-[60px] my-[20px] h-[58px] py-[14px] px-[15px] border border-[#C4C4C3] text-[#C4C4C3]"
                name="message"
                placeholder="Message"
                id=""
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <button className="text-[18px] text-[#fefefd] bg-[#85a900] py-[10px] px-[50px]  rounded-3xl transition-all duration-700 hover:bg-[#000000] mb-[100px]">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
