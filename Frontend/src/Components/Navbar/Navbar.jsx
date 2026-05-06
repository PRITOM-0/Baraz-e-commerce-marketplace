import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "/daraz-logo.png";
import QR from "/AppQR.png";

const Navbar = () => {
  return (
    <div className="h-29.75 w-full bg-[#f85606] text-white">
      {/* text links */}
      <div className="mx-auto flex h-6.25 max-w-309.75 items-center justify-end gap-8 pr-6 text-[11px] uppercase">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer">
            SAVE MORE ON APP
          </div>

          <div
            tabIndex={0}
            className="dropdown-content z-50 mt-3 rounded bg-white p-4 text-black shadow"
          >
            <div className="flex h-32 w-32 items-center justify-center bg-gray-200 text-xs">
              <img src={QR} alt="App QR Code" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <Link to="/seller">BECOME A SELLER</Link>
        <Link to="/help">HELP & SUPPORT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGN UP</Link>

        <select className="bg-[#f85606] text-white outline-none">
          <option value="bn">বাংলা</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* main navbar */}
      <div className="mx-auto flex h-23.5 max-w-309.75 items-center px-4">
        {/* daraz logo */}
        <Link to="/" className="mr-22.5 w-30">
          <img src={logo} alt="Daraz Logo" className="w-full object-contain" />
        </Link>

        {/* search box */}
        <div className="flex h-11.5 w-172.5 overflow-hidden rounded-sm bg-white">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="h-full flex-1 px-5 text-[14px] text-gray-700 outline-none placeholder:text-gray-400"
          />

          <button className="flex h-full w-11.5 items-center justify-center bg-[#ffe1d2] text-[#f85606]">
            <FiSearch size={23} />
          </button>
        </div>

        {/* add cart */}
        <Link to="/cart" className="ml-7">
          <FiShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;