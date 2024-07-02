import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const footerLinks = [
  {
    id: 1,
    name: "Home",
    Link: "/greenscape",
  },
  {
    id: 2,
    name: "About",
    Link: "/about",
  },
  {
    id: 3,
    name: "Service",
    Link: "/service",
  },
  {
    id: 4,
    name: "Work",
    Link: "/blog",
  },
  {
    id: 5,
    name: "Contact Us",
    Link: "/contact",
  },
];
function Footer() {
  return (
    <>
      <div className="bg-[#181818]">
        <div className="flex justify-evenly flex-wrap">
          <div className="w-[285px] py-[70px]">
            <h2 className="text-[#ffffff] text-[24px] font-semibold">
              Contact Us
            </h2>
            <div className="text-[#ffffff] text-[16px] flex items-center mt-[20px] mb-[10px]">
              <FaLocationDot />
              <p className="ml-[15px]">Location</p>
            </div>
            <div className="text-[#ffffff] text-[16px] flex items-center mb-[10px]">
              <IoCall />
              <p className="ml-[15px]">(+91) 1234567890</p>
            </div>
            <div className="text-[#ffffff] text-[16px] flex items-center mb-[20px]">
              <IoIosMail />
              <p className="ml-[15px]">demo@mail.com</p>
            </div>
            <div className="text-[#ffffff] flex items-center pb-[30px]">
              <Link to="/greenscape">
                <FaFacebookF
                  size={25}
                  className="mx-[5px] hover:text-[#85A900] duration-700 transition-all"
                />
              </Link>
              <Link to="/greenscape">
                <FaTwitter
                  size={25}
                  className="mx-[5px] hover:text-[#85A900] duration-700 transition-all"
                />
              </Link>
              <Link to="/greenscape">
                <FaLinkedinIn
                  size={25}
                  className="mx-[5px] hover:text-[#85A900] duration-700 transition-all"
                />
              </Link>
              <Link to="/greenscape">
                <FaInstagram
                  size={25}
                  className="mx-[5px] hover:text-[#85A900] duration-700 transition-all"
                />
              </Link>
            </div>
          </div>
          <div className="w-[285px] py-[70px]">
            <h2 className="text-[24px] text-[#ffffff] font-semibold">
              Usefull Link
            </h2>
            <ul className="mt-[20px]">
              {footerLinks.map((link) => (
                <li key={link.id} className="py-[5px]">
                  <NavLink
                    to={link.Link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[16px] text-[#85A900]"
                          : "text-[16px] text-[#ffffff] hover:text-[#85a900] transition-all duration-700"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[285px] py-[70px]">
            <h2 className="text-[24px] text-[#ffffff] font-semibold">About</h2>
            <p className="text-[16px] text-[#ffffff] mt-[20px]">
              Readable content of a page when looking at its layoutreadable
              content of a page when looking at its layout
            </p>
          </div>
          <div className="w-[285px] py-[70px]">
            <h2 className="text-[24px] text-[#ffffff] font-semibold">
              Newsletter
            </h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email"
              className="text-[#ffffff] text-[16px] border border-[#ffffff] w-[255px] h-[55px] py-[5px] px-[20px] bg-transparent my-[20px]"
            />{" "}
            <br />
            <button className="text-[16px] text-[#ffffff] mt-[30px] border border-[#ffffff] py-[10px] w-[140px] text-center">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-[#ffffff] text-center py-[30px]">
            2024 All Rights Reserved. Design by Free html Templates
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
