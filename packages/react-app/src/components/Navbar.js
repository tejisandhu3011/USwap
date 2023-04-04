import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { WalletButton } from "./";

import logo from "../assets/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-10 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-5">
      <div className="md:flex-[0.4] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-45 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[<a
          href="https://www.coindesk.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Market News
        </a>, <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Rates
        </a>, <a
          href="http://localhost:4000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UPay
        </a>, "About Us"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li>
        <WalletButton />
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {[<a
          href="https://www.coindesk.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Market News
        </a>, <a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Rates
        </a>, <a
          href="http://localhost:4000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UPay
        </a>, "About Us"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
        <li className="p-3">
          <WalletButton />
        </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
