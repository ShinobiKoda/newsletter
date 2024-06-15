import React, { useEffect, useState } from "react";
import successImg from "../assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const NavigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 px-4 mt-20 md:bg-white md:w-[400px] md:h-[400px] md:rounded-xl md:justify-center md:px-8">
      <img src={successImg} alt="success" className="w-12" />
      <h1 className="font-bold text-[2.7rem] leading-10">
        Thanks for subscribing
      </h1>

      <p className="text-xl">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription.
      </p>

      <div className="absolute bottom-10 w-full left-0 px-8 md:relative md:bottom-0 md:p-0 md:mx-auto md:mt-4">
        <button
          className="bg-blue-950 text-white p-4 rounded-xl font-bold hover:bg-[#FF5736] hover:cursor-pointer outline-none border-none w-full"
          onClick={NavigateToHomePage}
        >
          Dismiss Message
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
