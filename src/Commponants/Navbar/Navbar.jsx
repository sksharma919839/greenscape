import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Image/logo .png";
import { IoMenu } from "react-icons/io5";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/greenscape",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Service",
    link: "/service",
  },

  {
    id: 4,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar-bg">
        <div className="flex items-center justify-between sm:px-[80px] px-[30px]">
          <Link to="/greenscape">
            <img src={Logo} className="w-[76px] h-[40px] my-[30px]" alt="" />
          </Link>
          <ul className="hidden lg:flex justify-evenly">
            {navLinks.map((link) => (
              <li key={link.id} className="my-[40px]">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[18px] text-[#77a01d] px-[20px] py-[15px] bg-[#fefefd]  mr-[10px]"
                        : "text-[18px] text-[#fefefd] px-[20px] py-[15px] hover:bg-[#fefefd] hover:text-[#77a01d] transition-all duration-500 mr-[10px]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            className="lg:hidden bg-[#ffffff] text-[#00000080] text-[30px] py-[8px] px-[15px] rounded-lg"
            onClick={menuClick}
          >
            {isOpen ? <IoMenu /> : <IoMenu />}
          </div>
        </div>
        {isOpen ? (
          <ul
            className={
              isOpen
                ? " lg:hidden left-0  w-[100%] h-[420px] transition-all duration-500 ease-in-out"
                : "top-[-320px] transition-all duration-500 ease-in-out"
            }
          >
            {navLinks.map((link) => (
              <li key={link.id} className="text-center my-[20px]">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[18px] text-[#77a01d] py-[15px] px-[40px] bg-[#fefefd]  mr-[10px]"
                        : "text-[18px] text-[#fefefd] py-[15px] px-[40px] hover:bg-[#fefefd] hover:text-[#77a01d] transition-all duration-500 mr-[10px]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Navbar;
