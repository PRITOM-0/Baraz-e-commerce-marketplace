
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

import { auth, facebookProvider, googleProvider } from "../firebase/firebase.config";

import { toast } from "react-toastify";

import { FiEye, FiEyeOff } from "react-icons/fi";

import fbLogo from "/fb-logo.png";
import googleLogo from "/google-logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const [loading, setLoading] = useState(false);

  // password strength checker
  const getPasswordStrength = () => {
    const hasUppercase = /[A-Z]/.test(password);

    const hasLowercase = /[a-z]/.test(password);

    const hasNumber = /[0-9]/.test(password);

    const hasSpecial = /[!@#$%^&*]/.test(password);

    if (
      password.length >= 8 &&
      hasUppercase &&
      hasLowercase &&
      hasNumber &&
      hasSpecial
    ) {
      return "strong";
    }

    if (
      password.length >= 6 &&
      hasLowercase &&
      hasNumber
    ) {
      return "medium";
    }

    return "weak";
  };

  const passwordStrength = getPasswordStrength();

  const handleSignup = async () => {
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (passwordStrength === "weak") {
      return toast.error("Password is too weak");
    }

    if (!acceptedTerms) {
      return toast.error(
        "Please accept Terms & Privacy Policy"
      );
    }

    try {
      setLoading(true);

      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(result.user, {
        displayName: name,
      });

      toast.success(
        "Account Created Successfully"
      );

      // firebase automatically logs in user

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      toast.success("Google Signup Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);

      toast.success("Facebook Signup Successful");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">
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
            Create Account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Join us and start shopping today
          </p>
        </div>

        {/* name */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="h-12 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-[#f57224]"
          />
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
                showPassword ? "text" : "password"
              }
              placeholder="Create password"
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

          {/* password strength */}
          {password && (
            <p
              className={`mt-2 text-sm font-medium ${
                passwordStrength === "strong"
                  ? "text-green-600"
                  : passwordStrength === "medium"
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              Password Strength:{" "}
              {passwordStrength
                .charAt(0)
                .toUpperCase() +
                passwordStrength.slice(1)}
            </p>
          )}
        </div>

        {/* confirm password */}
        <div className="mb-5 mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Retype Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Retype password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="h-12 w-full rounded-xl border border-gray-300 px-4 pr-12 text-sm outline-none transition focus:border-[#f57224]"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showConfirmPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>

          {/* password match */}
          {confirmPassword && (
            <p
              className={`mt-2 text-sm font-medium ${
                password === confirmPassword
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {password === confirmPassword
                ? "Passwords matched"
                : "Passwords do not match"}
            </p>
          )}
        </div>

        {/* terms checkbox */}
        <div className="mb-6 flex items-start gap-3">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) =>
              setAcceptedTerms(e.target.checked)
            }
            className="mt-1 h-4 w-4 cursor-pointer accent-[#f57224]"
          />

          <p className="text-sm leading-6 text-gray-500">
            By creating and/or using your
            account, you agree to our{" "}
            <Link
              to="/terms"
              className="font-medium text-[#f57224] hover:underline"
            >
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-medium text-[#f57224] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* signup button */}
        <button
          onClick={handleSignup}
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
            "SIGN UP"
          )}
        </button>

        {/* login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#f57224] hover:underline"
          >
            Login
          </Link>
        </p>

        {/* divider */}
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200"></div>

          <p className="text-sm text-gray-400">
            Or sign up with
          </p>

          <div className="h-px flex-1 bg-gray-200"></div>
        </div>

        {/* social signup */}
        <div className="flex flex-col gap-4">

          {/* google */}
          <button
            onClick={handleGoogleSignup}
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
            onClick={handleFacebookSignup}
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

export default Signup;