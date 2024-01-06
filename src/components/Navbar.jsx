import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/32483.jpg";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const links = ["NGOs", "PENSIL", "How to help", "Contact us"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const Pencil = () => {
    <a  href="https://pencil.gov.in/" target="_blank">PENSIL</a>
  }
  return (
    <nav className="w-full flex  justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-20 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {links.map((link, idx) => {
          return <NavbarItem title={link} classProps="" key={link + idx} />;
        })}
        {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li> */}
      </ul>
      <div className="flex relative md:hidden">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2 cursor-pointer">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {links.map((link, idx) => {
              return (
                <NavbarItem
                  title={link}
                  classProps="my-2 text-lg"
                  key={link + idx}
                />
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
