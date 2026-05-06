import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fbLogo from "/fb-logo.png";
import googleLogo from "/google-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("password");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-115 rounded-sm bg-white px-8 pb-8 pt-6 shadow-xl">

        {/* close button*/}
        <button
          onClick={() => navigate("/")}
          className="absolute right-5 top-1 cursor-pointer text-[34px] font-light text-gray-500 hover:text-black"
        >
          ×
        </button>

        <div className="mb-10 flex items-center justify-center gap-10 text-[15px] font-semibold">
          <button
            onClick={() => setLoginType("password")}
            className={`cursor-pointer ${loginType === "password" ? "text-gray-900" : "text-gray-400"}`}
          >
            Password
          </button>

          <span className="h-5 w-px bg-gray-300"></span>

          <button
            onClick={() => setLoginType("phone")}
            className={`cursor-pointer ${loginType === "phone" ? "text-gray-900" : "text-gray-400"}`}
          >
            Phone Number
          </button>
        </div>

        {loginType === "password" ? (
          <>

          {/* Email and phone input field */}
            <input
              type="text"
              placeholder="Please enter your Phone or Email"
              className="mb-5 h-11 w-full rounded-sm border border-gray-300 px-4 text-sm outline-none focus:border-gray-400"
            />

            <input
              type="password"
              placeholder="Please enter your password"
              className="mb-2 h-11 w-full rounded-sm border border-gray-300 px-4 text-sm outline-none focus:border-gray-400"
            />

            <p className="mb-7 cursor-pointer text-right text-sm text-gray-400 hover:text-[#f57224]">
              Forgot password?
            </p>

            <button className="h-11 w-full cursor-pointer rounded-sm bg-[#f57224] text-sm font-semibold text-white hover:bg-[#e74e00]">
              LOGIN
            </button>
          </>
        ) : (
          <>

          {/* phone number input field */}
            <div className="mb-12 flex gap-2">
              <div className="flex h-12 w-21 items-center justify-center rounded-sm border border-gray-300 text-sm text-gray-700">
                🇧🇩 +880
              </div>

              <input
                type="text"
                placeholder="Please enter your phone number"
                className="h-12 flex-1 rounded-sm border border-gray-300 px-4 text-sm outline-none focus:border-gray-400"
              />
            </div>

        <button className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#f57224] text-sm font-semibold text-white hover:bg-[#e74e00]">
        
        <FontAwesomeIcon icon={faMobileScreen} className="text-[14px]" />

        Send code via SMS
        </button>
          </>
        )}

        <p className="mt-5 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <p className="mt-20 text-center text-sm text-gray-400">
          Or, login with
        </p>

        <div className="mt-6 flex items-center justify-center gap-10">
          <Link to="/login/google" className="flex gap-1 text-sm text-gray-600">
            <img src={googleLogo} alt="Google" className="h-5 w-5" />
            Google
          </Link>

          <Link
            to="/login/facebook"
            className="flex gap-1 text-sm text-gray-600"
          >
            <img src={fbLogo} alt="Facebook" className="h-5 w-5" />
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;