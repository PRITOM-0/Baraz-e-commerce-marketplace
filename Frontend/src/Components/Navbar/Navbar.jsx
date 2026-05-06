import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

import logo from "/daraz-logo.png";
import QR from "/AppQR.png";
import playStore from "/playstore-logo.png";
import appStore from "/appstore-logo.png";

const Navbar = () => {
  return (
    <div className="h-29.75 w-full bg-[#f85606] text-white">
      
      {/* top text links navbar*/}
      <div className="mx-auto flex h-6.25 max-w-309.75 items-center justify-end gap-8 pr-6 text-[11px] uppercase">
        
        {/* SAVE MORE ON APP text link*/}
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="cursor-pointer">
            SAVE MORE ON APP
          </div>

          <div
            tabIndex={0}
            className="dropdown-content absolute left-1/2 z-50 mt-2.5 w-85 -translate-x-1/2 border border-gray-300 bg-white px-6 py-4.5 text-black shadow-md"
          >
            {/* arrow */}
            <div className="absolute -top-1.75 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-gray-300 bg-white"></div>

            {/* title */}
            <h2 className="mb-4.5 text-[18px] font-normal normal-case text-gray-800">
              Download the App
            </h2>

            {/* QR of the Save more on button */}
            <img
              src={QR}
              alt="QR Code"
              className="mb-5.5 h-35 w-35 object-contain"
            />

            {/* app buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/daraz-online-shopping-app/id978058048"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt="App Store"
                  className="h-9.5 w-full object-contain"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?spm=a2a0e.tm80335411.header.3.735212f75zeDsP&id=com.daraz.android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playStore}
                  alt="Google Play"
                  className="h-9.5 w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <Link to="/seller">BECOME A SELLER</Link>
        <Link to="/help">HELP & SUPPORT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGN UP</Link>

        {/* language */}
        <select className="bg-[#f85606] text-white outline-none">
          <option value="bn">বাংলা</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* main navbar (Search button, logo, add to cart button)*/}
      <div className="relative mx-auto h-23.5 max-w-309.75">
        
        {/* logo of the Daraz */}
        <Link to="/" className="absolute left-16.25  w-31.75">
          <img
            src={logo}
            alt="Daraz Logo"
            className="w-full object-contain"
          />
        </Link>

        {/* search box */}
        <div className="absolute left-65 top-1.25 flex h-11.5 w-172 overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="h-full flex-1 border-none px-5 text-[14px] text-gray-700 outline-none"
          />

          <button className="flex h-full w-12 items-center justify-center bg-[#ffe1d2] text-[#f85606]">
            <FiSearch size={23} />
          </button>
        </div>

        {/* add to cart button */}
        <Link to="/cart" className="absolute left-245 top-3">
          <FiShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;