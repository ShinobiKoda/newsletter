import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import useWindowSize from "./useWindowSize";

const HomePage = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      localStorage.setItem("email", email);
      navigate("/confirmation");
    }
  };

  return (
    <div className="w-full h-full m-auto md:flex md:flex-row-reverse max-w-[1024px] md:bg-white rounded-[1.5rem] md:p-5 items-center">
      {isMobile ? (
        <img
          src={illustrationMobile}
          alt="Mobile Illustration"
          className="w-full"
        />
      ) : (
        <img src={illustrationDesktop} alt="Desktop Illustration" />
      )}
      <div className="px-4 py-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold mb-4 md:text-[2rem]">
          Stay Updated!
        </h1>
        <p className="md:text-xl">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-2 mb-10 md:text-xl">
          <li className="flex flex-row gap-4 items-center">
            <img src={iconList} alt="List Icon" className="w-5" />
            <span>Product discovery and building what matters</span>
          </li>
          <li className="flex flex-row gap-4 items-center">
            <img src={iconList} alt="List Icon" className="w-5" />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li className="flex flex-row gap-4 items-center">
            <img src={iconList} alt="List Icon" className="w-5" />
            <span>And much more!</span>
          </li>
        </ul>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-row justify-between">
              <label htmlFor="email" className="font-bold">
                Email address
              </label>
              {emailError && !isMobile && (
                <span className="email-error text-red-500">
                  Valid Email Required
                </span>
              )}
            </div>
          </div>
          <input
            type="text"
            placeholder="email@company.com"
            className={`border-2 rounded-md p-5 hover:cursor-pointer ${
              emailError ? "border-red-500" : ""
            }`}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailError(false)}
          />
          {isMobile && emailError && (
            <span className="email-error text-red-500">
              Valid Email Required
            </span>
          )}
          <button
            type="submit"
            className="mt-4 bg-blue-950 text-white px-4 py-6 rounded-xl font-bold hover:bg-[#FF5736] hover:cursor-pointer outline-none border-none"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
