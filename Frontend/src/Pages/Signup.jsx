import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";

import fbLogo from "/fb-logo.png";
import googleLogo from "/google-logo.png";

const Signup = () => {
  const navigate = useNavigate();

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


        <h2 className="mb-10 text-center text-[15px] font-semibold text-gray-900">
          Sign up
        </h2>

        {/* phone number input field */}
        <div className="mb-3 flex gap-2">
          <div className="flex h-11 w-21 items-center justify-center rounded-sm border border-gray-300 text-sm text-gray-700">
            🇧🇩 +880
          </div>

          <input
            type="text"
            placeholder="Please enter your phone number"
            className="h-11 flex-1 rounded-sm border border-gray-300 px-4 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* checkbox for user to agree with the terms and condition */}
        <div className="mb-6 flex items-start gap-2 text-xs text-gray-500">
          <input type="checkbox" className="mt-1 h-4 w-4 cursor-pointer" />

          <p>
            By creating and/or using your account, you agree to our{" "}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* sms button */}
        <button className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-[#f57224] text-sm font-semibold text-white hover:bg-[#e74e00]">
          <FontAwesomeIcon icon={faMobileScreen} className="text-[14px]" />
          Send code via SMS
        </button>

        {/* login link */}
        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in Now
          </Link>
        </p>

        {/* social text */}
        <p className="mt-20 text-center text-sm text-gray-400">
          Or, sign up with
        </p>

        {/* social buttons */}
        <div className="mt-6 flex items-center justify-center gap-10">
          <Link to="/signup/google" className="flex gap-1 text-sm text-gray-600">
            <img src={googleLogo} alt="Google" className="h-5 w-5" />
            Google
          </Link>

          <Link
            to="/signup/facebook"
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

export default Signup;