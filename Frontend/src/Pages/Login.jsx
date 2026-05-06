import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { auth, facebookProvider, googleProvider } from "../firebase/firebase.config";

import { toast } from "react-toastify";

import { FiEye, FiEyeOff } from "react-icons/fi";

import fbLogo from "/fb-logo.png";
import googleLogo from "/google-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Login Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast.success("Google Login Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);

      toast.success("Facebook Login Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      return toast.error(
        "Please enter your email first"
      );
    }

    try {
      await sendPasswordResetEmail(auth, email);

      toast.success(
        "Password reset email sent"
      );
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-107.5 rounded-2xl bg-white px-8 py-8 shadow-2xl">

        {/* close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute right-5 top-3 cursor-pointer text-[34px] font-light text-gray-400 transition hover:text-black"
        >
          ×
        </button>

        {/* title */}
        <div className="mb-8">
          <h2 className="text-[30px] font-bold text-gray-900">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Login to continue shopping
          </p>
        </div>

        {/* email */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-[#f57224]"
          />
        </div>

        {/* password */}
        <div className="mb-2">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="h-12 w-full rounded-xl border border-gray-300 px-4 pr-12 text-sm outline-none transition focus:border-[#f57224]"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* forgot password */}
        <p
          onClick={handleForgotPassword}
          className="mb-6 cursor-pointer text-right text-sm text-gray-400 transition hover:text-[#f57224]"
        >
          Forgot Password?
        </p>

        {/* login button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold text-white transition ${
            loading
              ? "cursor-not-allowed bg-orange-300"
              : "cursor-pointer bg-[#f57224] hover:bg-[#e65a0a]"
          }`}
        >
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          ) : (
            "LOGIN"
          )}
        </button>

        {/* signup link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-[#f57224] hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {/* divider */}
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>

          <p className="text-sm text-gray-400">
            Or continue with
          </p>

          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* social login */}
        <div className="flex flex-col gap-4">

          {/* google */}
          <button
            onClick={handleGoogleLogin}
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <img
              src={googleLogo}
              alt="Google"
              className="h-5 w-5"
            />

            Continue with Google
          </button>

          {/* facebook */}
          <button
            onClick={handleFacebookLogin}
            className="flex h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <img
              src={fbLogo}
              alt="Facebook"
              className="h-5 w-5"
            />

            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;