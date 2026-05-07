import { useState } from "react";
import { Link } from "react-router";
import { 
  FiSearch, 
  FiShoppingCart, 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiUser, 
  FiGlobe,
  FiHelpCircle
} from "react-icons/fi";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="w-full bg-[#f57224] text-white sticky top-0 z-50 shadow-md">
      {/* 1. TOP UTILITY BAR (Desktop & Large screens only) */}
      <div className="hidden lg:block w-full border-b border-[#e25c10]/30 bg-[#f57224]">
        <div className="max-w-[1200px] mx-auto px-4 h-[34px] flex items-center justify-end text-[12px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange-100 transition-colors duration-200">
              SAVE MORE ON APP
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors duration-200">
              BECOME A SELLER
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors duration-200 flex items-center gap-1">
              <FiHelpCircle className="text-[13px]" /> HELP & SUPPORT
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors duration-200">
              LOGIN
            </a>
            <a href="#" className="hover:text-orange-100 transition-colors duration-200">
              SIGN UP
            </a>
            <button className="hover:text-orange-100 transition-colors duration-200 flex items-center gap-1 cursor-pointer">
              <FiGlobe className="text-[13px]" /> <span>ভাষা</span> <FiChevronDown className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="w-full bg-[#f57224]">
        <div className="max-w-[1200px] mx-auto px-4 h-[64px] md:h-[75px] flex items-center justify-between gap-4 md:gap-8">
          
          {/* Left: Mobile Menu Toggle & Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden text-white p-1.5 rounded-md hover:bg-orange-600 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <FiMenu className="text-2xl" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/Assets/Daraz-Logo.png" 
                alt="Daraz Logo" 
                className="h-[32px] md:h-[40px] w-auto object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = "none";
                }}
              />
              {/* Fallback stylized text if image is missing */}
              <span className="text-2xl font-black italic tracking-tighter text-white block lg:hidden xl:block" id="daraz-logo-fallback">
                {/* Visual replacement if needed */}
              </span>
            </Link>
          </div>

          {/* Center: Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="flex-1 max-w-[700px] h-[38px] md:h-[45px] bg-white rounded-[4px] overflow-hidden flex items-center shadow-inner"
          >
            <input 
              type="text" 
              placeholder="Search in Daraz"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full px-4 text-[14px] text-gray-800 placeholder-gray-400 bg-transparent border-0 outline-none focus:ring-0"
            />
            <button 
              type="submit" 
              className="h-full px-5 bg-[#ffe8de] hover:bg-[#ffd5c2] text-[#f57224] transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Search"
            >
              <FiSearch className="text-lg md:text-xl stroke-[2.5]" />
            </button>
          </form>

          {/* Right: Shopping Cart & User Shortcuts (Desktop) */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Shopping Cart Icon */}
            <Link to="#" className="relative p-2 hover:bg-orange-600 rounded-full transition-colors duration-200">
              <FiShoppingCart className="text-2xl md:text-3xl text-white stroke-[2]" />
              <span className="absolute -top-1 -right-1 bg-white text-[#f57224] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-md">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SIDE DRAWER (Pure Tailwind/React transitions) */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isDrawerOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
          onClick={() => setIsDrawerOpen(false)}
        />

        {/* Drawer Side menu */}
        <div 
          className={`absolute top-0 left-0 bottom-0 w-[280px] sm:w-[320px] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out z-10 ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-[#f57224] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/Assets/Daraz-Logo.png" alt="Logo" className="h-8 w-auto object-contain" />
            </div>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-1.5 rounded-md hover:bg-orange-600 transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Links content */}
          <div className="flex-1 overflow-y-auto py-4 px-2 text-gray-800">
            <div className="space-y-1">
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 hover:text-[#f57224] rounded-md transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <FiUser className="text-lg text-gray-500" />
                <span className="font-medium">Login / Sign Up</span>
              </a>
              <hr className="border-gray-100 my-2" />
              
              <div className="px-4 py-2 text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                Shopping & Deals
              </div>
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-[#f57224] rounded-md transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="font-medium">Save More On App</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-[#f57224] rounded-md transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="font-medium">Become a Seller</span>
              </a>
              
              <hr className="border-gray-100 my-2" />
              <div className="px-4 py-2 text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                Support & Language
              </div>
              
              <a 
                href="#" 
                className="flex items-center gap-3 px-4 py-2.5 hover:bg-orange-50 hover:text-[#f57224] rounded-md transition-colors"
                onClick={() => setIsDrawerOpen(false)}
              >
                <span className="font-medium">Help & Support</span>
              </a>
              
              <button 
                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-orange-50 hover:text-[#f57224] rounded-md transition-colors text-left cursor-pointer"
                onClick={() => {
                  console.log("Toggle language");
                }}
              >
                <span className="font-medium flex items-center gap-3">
                  <FiGlobe className="text-lg text-gray-500" /> Language: <strong>ভাষা</strong>
                </span>
                <FiChevronDown className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Footer inside drawer */}
          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Baraz Marketplace
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
