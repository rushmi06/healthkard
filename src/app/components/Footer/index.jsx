import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import withTheme from "../../theme/Theme";
import GooglePlayStoreLogo from "../../assets/GooglePlayStoreLogo.png";
import AppStoreLogo from "../../assets/AppStoreLogo.png";
import { Link } from "react-router-dom";

const Footer = ({ theme }) => {
  return (
    <div style={ { backgroundColor: theme.primary, color: theme.senary } } className="w-full md:h-[400px] flex flex-col md:flex-row md:items-center md:justify-around p-4 md:px-10">

      {/* Left Side Panel */ }
      <div className="flex md:justify-center flex-col gap-4 md:w-[45%] h-[70%]">
        <h2 className="w-max h-[45px] text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00BFA8] to-[rgba(0,191,168,0.5)] text-transparent bg-clip-text">
          HealthKard
        </h2>
        <p className="font-light">
          Healthkard has a clear objective: to provide hassle-free access to physical doctor consultations. Our main agenda is to create a single card called Healthkard, that allows people to visit multiple doctors associated with us and multiple times for just INR 99. The user will get the unique Healthkard ID for identifying the personal details of the user which will prevent the misuse of the card.
        </p>
        <div className="font-light">
          <p className="text-[1rem] font-semibold">Contact Us</p>
          <p>+91 78427 22245</p>
          <p>support@healthkard.in</p>
          <p>HaleKard Pvt Ltd.</p>
        </div>
        <div className="font-semibold">
          <p style={ { color: theme.senary } }>©Copyright @2024 Healthkard Powered by Halekard Private Limited</p>
        </div>
      </div>

      {/* Divider for Desktop */ }
      <div style={ { backgroundColor: theme.senary } } className="hidden md:block h-[80%] w-[2px]"></div>
      <div style={ { backgroundColor: theme.senary } } className="block md:hidden h-[2px] w-full my-4"></div>

      {/* Right Side Panel */ }
      <div className="w-full md:w-[50%] flex flex-col  md:flex-row justify-between h-auto md:h-[70%]">

        {/* About Us Section */ }
        <div className="font-semibold flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <a href="/about" target="_blank" rel="noreferrer">About Us</a>
            <a href="/blogs" target="_blank" rel="noreferrer">Blogs</a>
            <a href="/faqs" target="_blank" rel="noreferrer">FAQ's</a>
            <a href="/terms-and-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a>
            <a href="/private-policies" target="_blank" rel="noreferrer">Private Policies</a>
            <a href="/refund-policy" target="_blank" rel="noreferrer">Refund Policy</a>
          </div>
          <div>
            <p>Follow Us :</p>
            <div className="flex gap-4 text-2xl p-2">
              <a href="mailto:support@healthkard.in" target="_blank" rel="noreferrer" ><CiMail /></a>
              <a href="https://www.linkedin.com/company/healthkard/posts/?feedView=all" target="_blank" rel="noreferrer" ><CiLinkedin /></a>
              <a href="https://www.instagram.com/healthkard.in" target="_blank" rel="noreferrer" ><CiInstagram /></a>
            </div>
          </div>
        </div>

        {/* Divider for Mobile */ }
        <div className="block md:hidden h-[2px] w-full bg-white my-4"></div>

        {/* HealthKard Plans Section */ }
        <div className="flex flex-col">
          <h2 className="font-semibold">HealthKard Plans</h2>
          <div className="flex flex-col gap-2 font-light">
            <Link to="/">Monthly Plan</Link>
            <Link to="/">Quarterly Plan</Link>
            <Link to="/">Half Yearly Plan</Link>
            <Link to="/">Yearly Plan</Link>
          </div>
          <div className="flex flex-col items-center py-4">
            <h2 className="font-semibold mb-2">Download Apps</h2>
            <div className="flex gap-2">
              <img src={ GooglePlayStoreLogo } alt="Google Play Store" className="w-28 h-10" />
              <img src={ AppStoreLogo } alt="App Store" className="w-28" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default withTheme(Footer)
