import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import { 
  FiChevronLeft,
  FiChevronRight,
  FiStar, 
  FiTruck, 
  FiGift 
} from "react-icons/fi";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Banner = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of 10 banner images matching public/Assets/Banner/Banner-X.png
  const bannerImages = Array.from({ length: 10 }, (_, i) => `/Assets/Banner/Banner-${i + 1}.png`);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-4 md:py-6">
      {/* TOP ROW: SLIDER + DOWNLOAD CARD GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* LEFT: SLIDER / CAROUSEL USING SWIPERJS (occupies 9/12 cols on desktop) */}
        <div className="lg:col-span-9 relative overflow-hidden rounded-lg shadow-md aspect-[1200/460] w-full bg-gray-100 group">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop={true}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full"
          >
            {bannerImages.map((image, index) => (
              <SwiperSlide key={index} className="w-full h-full select-none">
                <img 
                  src={image} 
                  alt={`Promotional Banner ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </SwiperSlide>
            ))}

            {/* Custom Left Arrow Button (Tailwind styled, fades on hover) */}
            <button 
              className="swiper-button-prev-custom absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none cursor-pointer z-10"
              aria-label="Previous slide"
            >
              <FiChevronLeft className="text-xl md:text-2xl" />
            </button>

            {/* Custom Right Arrow Button (Tailwind styled, fades on hover) */}
            <button 
              className="swiper-button-next-custom absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:outline-none cursor-pointer z-10"
              aria-label="Next slide"
            >
              <FiChevronRight className="text-xl md:text-2xl" />
            </button>

            {/* Custom Pagination Indicator Dots (Tailwind styled, dynamic scale) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 md:gap-2 z-10">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swiperInstance && swiperInstance.slideToLoop(index)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                    activeIndex === index 
                      ? "bg-white scale-125 shadow-md" 
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Swiper>
        </div>

        {/* RIGHT: DOWNLOAD APP WIDGET (occupies 3/12 cols on desktop) */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col justify-between p-4 min-h-full">
          {/* Header row */}
          <div className="flex items-center gap-2 mb-3">
            <img className="w-6" src="/Assets/Download-daraz.png" alt="Download Daraz icon" />
            <h3 className="text-sm font-bold text-gray-800 tracking-tight">
              Download the App
            </h3>
          </div>

          {/* App Store Promo Card */}
          <div className="w-full bg-[#faf9f8] rounded-lg border border-orange-100/50 p-3 flex flex-col relative overflow-hidden flex-1 justify-center">
            {/* Top Badge: 4.8 Rated and Download button wrapper */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 px-2 py-0.5 bg-[#f57224] text-white rounded-full text-[10px] font-bold shadow-sm">
                <FiStar className="text-[10px] fill-white stroke-none" />
                <span>4.8 Rated</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-400">Download App</span>
            </div>

            {/* Feature 1: Free Delivery */}
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-400 to-emerald-500 text-white flex items-center justify-center shadow-xs">
                <FiTruck className="text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 leading-tight">Free Delivery</span>
                <span className="text-[9px] text-gray-400 leading-none">On first order</span>
              </div>
            </div>

            {/* Feature 2: Limited Time coupons */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff4d6d] to-[#ff758f] text-white flex items-center justify-center shadow-xs">
                <FiGift className="text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 leading-tight">Limited Time</span>
                <span className="text-[9px] text-gray-400 leading-none">Voucher discounts</span>
              </div>
            </div>
          </div>

          {/* QR Code and Badges Section */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="w-16 h-16 bg-white border border-gray-200 p-1 rounded-md flex-shrink-0 flex items-center justify-center shadow-2xs overflow-hidden">
              <img className="w-20" src="/Assets/Daraz-qr.png" alt="Daraz QR Code" />
            </div>

            {/* Action Badges */}
            <div className="flex-1 flex flex-col gap-1.5">
              {/* App Store Link */}
              <a 
                href="#" 
                className="flex items-center gap-1 px-2.5 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-colors shadow-2xs"
              >
                <FaApple className="text-base flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <span className="text-[6px] text-gray-300 font-medium leading-none">Download on the</span>
                  <span className="text-[10px] font-bold leading-tight tracking-tight">App Store</span>
                </div>
              </a>

              {/* Google Play Link */}
              <a 
                href="#" 
                className="flex items-center gap-1 px-2.5 py-1 bg-black text-white rounded-md hover:bg-gray-800 transition-colors shadow-2xs"
              >
                <FaGooglePlay className="text-[11px] flex-shrink-0 text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-[6px] text-gray-300 font-medium leading-none">GET IT ON</span>
                  <span className="text-[10px] font-bold leading-tight tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 font-medium text-center mt-3">
            Download the App Now!
          </p>
        </div>
      </div>

      {/* BOTTOM ROW: FULL WIDTH PROMO OFFER BANNER */}
      <div className="w-full mt-4 md:mt-6 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <img 
          src="/Assets/bottom-banner.webp" 
          alt="12% Savings Mega Eid Sale Banner" 
          className="w-full h-auto object-cover select-none"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
