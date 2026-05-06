// Navbar.jsx

import { Link } from "react-router-dom";

import { FiSearch, FiShoppingCart, FiUser, FiPackage, FiHeart, FiStar, FiRotateCcw, FiLogOut } from "react-icons/fi";

import { useEffect, useState } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../../firebase/firebase.config";

import { toast } from "react-toastify";

import logo from "/daraz-logo.png";
import QR from "/AppQR.png";
import playStore from "/playstore-logo.png";
import appStore from "/appstore-logo.png";

const Navbar = () => {
  const [searchText, setSearchText] =
    useState("");

  const [user, setUser] = useState(null);

  const handleSearch = () => {
    if (!searchText.trim()) return;

    console.log(
      "searching for: ",
      searchText
    );

    // Api call to search for the product
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="h-29.75 w-full bg-[#f85606] text-white">

      {/* top navbar */}
      <div className="mx-auto flex h-6.25 max-w-309.75 items-center justify-end gap-8 pr-6 text-[11px] uppercase">

        {/* SAVE MORE ON APP */}
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer transition hover:text-orange-100"
          >
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

            {/* qr */}
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

        <Link
          to="/seller"
          className="transition hover:text-orange-100"
        >
          BECOME A SELLER
        </Link>

        <Link
          to="/help"
          className="transition hover:text-orange-100"
        >
          HELP & SUPPORT
        </Link>

        {/* user dropdown */}
        {user ? (
          <div className="dropdown relative">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer transition hover:text-orange-100"
            >
              <span className="block max-w-36 truncate">
                {user.displayName ||
                  user.email}
              </span>
            </div>

            {/* dropdown menu */}
            <div
              tabIndex={0}
              className="dropdown-content absolute left-1/2 z-50 mt-3 w-73 translate-x-[-25%] overflow-hidden rounded-sm border border-gray-100 bg-white py-2 text-[13px] normal-case text-gray-600 shadow-[0_10px_35px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* arrow */}
              <div className="absolute -top-1.75 left-1/4 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l border-t border-gray-100 bg-white"></div>

              <Link
                to="/account"
                className="group flex items-center gap-4 px-6 py-3 transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiUser
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                Manage My Account
              </Link>

              <Link
                to="/orders"
                className="group flex items-center gap-4 px-6 py-3 transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiPackage
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                My Orders
              </Link>

              <Link
                to="/wishlist"
                className="group flex items-center gap-4 px-6 py-3 transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiHeart
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                My Wishlist & Followed Stores
              </Link>

              <Link
                to="/reviews"
                className="group flex items-center gap-4 px-6 py-3 transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiStar
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                My Reviews
              </Link>

              <Link
                to="/returns"
                className="group flex items-center gap-4 px-6 py-3 transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiRotateCcw
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                My Returns & Cancellations
              </Link>

              <button
                onClick={handleLogout}
                className="group flex w-full cursor-pointer items-center gap-4 px-6 py-3 text-left transition-all duration-200 hover:bg-[#fff3ee] hover:text-[#f85606]"
              >
                <FiLogOut
                  size={20}
                  className="text-gray-400 transition group-hover:text-[#f85606]"
                />

                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="transition hover:text-orange-100"
            >
              LOGIN
            </Link>

            <Link
              to="/signup"
              className="transition hover:text-orange-100"
            >
              SIGN UP
            </Link>
          </>
        )}

        {/* language */}
        <select className="bg-[#f85606] text-white outline-none">
          <option value="bn">
            বাংলা
          </option>

          <option value="en">
            English
          </option>
        </select>
      </div>

      {/* main navbar */}
      <div className="relative mx-auto h-23.5 max-w-309.75">

        {/* logo */}
        <Link
          to="/"
          className="absolute left-16.25 w-31.75"
        >
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
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="h-full flex-1 border-none px-5 text-[14px] text-gray-700 outline-none"
          />

          <button
            onClick={handleSearch}
            className="flex h-full w-12 cursor-pointer items-center justify-center bg-[#ffe1d2] text-[#f85606] transition hover:bg-[#ffd2bc]"
          >
            <FiSearch size={23} />
          </button>
        </div>

        {/* cart */}
        <Link
          to="/cart"
          className="absolute left-245 top-3 transition hover:scale-110"
        >
          <FiShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;