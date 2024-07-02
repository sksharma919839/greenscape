import React from "react";
import { Link } from "react-router-dom";
import first from "../../Image/img-1.png";
import second from "../../Image/img-2.png";
import third from "../../Image/img-3.png";
import fourth from "../../Image/img-4.png";
import fifth from "../../Image/img-5.png";
import sixth from "../../Image/img-6.png";

const serviceItems = [
  {
    id: 1,
    img: first,
    h4: "Garden",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
  {
    id: 2,
    img: second,
    h4: "Planting & Upgarde",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
  {
    id: 1,
    img: third,
    h4: "Bonsol Core",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
  {
    id: 1,
    img: fourth,
    h4: "Garden Maintenance",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
  {
    id: 1,
    img: fifth,
    h4: "Plant Water",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
  {
    id: 1,
    img: sixth,
    h4: "Plant Cuting",
    p: "It is a long established fact that a reader will be distracted by the readable content",
    link: "/service",
  },
];
function Ourservice() {
  return (
    <>
      <div className="service-bg class py-[80px]">
        <h1 className="text-[40px] text-[#252525] font-semibold text-center py-[90px]">
          Our Services
        </h1>
        <div>
          <div className="flex items-center justify-evenly flex-wrap">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className="w-[310px] h-[298px] px-[20px] py-[30px] mx-[30px] my-[30px] service-box"
              >
                <img src={item.img} className="h-[47px] w-[47px]" alt="" />
                <h4 className="text-[24px] text-[#3d3d3d] pt-[24px] font-semibold">
                  {item.h4}
                </h4>
                <p className="text-[16px] py-[20px] text-[#3d3d3d]">{item.p}</p>
                <Link
                  to={item.link}
                  className="text-[16px] text-[#4caf50] hover:text-[#3d3d3d] transition-all duration-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ourservice;
