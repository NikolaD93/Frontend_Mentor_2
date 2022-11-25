import React,{useState} from "react";
import logo from "../assets/logo.svg";
import NavButton from "./NavButton";
import menu from '../assets/icon-hamburger.svg';
import close from "../assets/icon-close.svg";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="wrapper flex justify-between items-center py-6 sticky z-10 bg-white">
      <div>
        <img src={logo} alt="logo" className="cursor-pointer"/>
      </div>

      <ul className="hidden sm:flex space-x-8 text-grayishBlue list-none">
        <li>
          <a href="#" className="hover:border-b-[6px] border-limeGreen transition-all hover:text-darkBlue pb-8">Home</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-[6px] border-limeGreen transition-all hover:text-darkBlue pb-8">About</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-[6px] border-limeGreen transition-all hover:text-darkBlue pb-8">Contact</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-[6px] border-limeGreen transition-all hover:text-darkBlue pb-8">Blog</a>
        </li>
        <li>
          <a href="#" className="hover:border-b-[6px] border-limeGreen transition-all hover:text-darkBlue pb-8">Careers</a>
        </li>
      </ul>

      <img onClick={() => setToggle((prev) => !prev)} className="sm:hidden" src={`${toggle ? close : menu}`} alt="menu" />

      <ul className={`${toggle? "flex flex-col" : "hidden"} shadow-2xl text-center absolute bg-white top-[70px] py-5 px-[150px] space-y-6 rounded-md sm:hidden `}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
      <NavButton />
    </nav>
  );
};

export default Navbar;
