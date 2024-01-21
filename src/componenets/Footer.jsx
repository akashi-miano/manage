import logo from "../assets/footer-logo.svg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useState } from "react";
const Footer = () => {
  const [text, setText] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputValue = e.target.elements.emailInput.value;
    setText(inputValue);
    if (inputValue.match(emailRegex)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  return (
    <footer className="py-16 text-white bg-[#1d1e25]">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-10 links-wrapper order-2 md:order-[0]">
            <img
              src={logo}
              alt="logo"
              className="footer-logo w-[146px] h-[24px] mx-auto md:mx-0 hidden md:block"
            />
            <ul className="flex items-center justify-center gap-4 mb-8 md:!justify-start footer__socials md:mb-0">
              <li>
                <a href="">
                  <FaSquareFacebook
                    size={35}
                    className="duration-300 hover:text-primary hover:cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube
                    size={35}
                    className="duration-300 hover:text-primary hover:cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter
                    size={35}
                    className="duration-300 hover:text-primary hover:cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FaPinterest
                    size={35}
                    className="duration-300 hover:text-primary hover:cursor-pointer"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillInstagram
                    size={35}
                    className="duration-300 hover:text-primary hover:cursor-pointer"
                  />
                </a>
              </li>
            </ul>
            <img
              src={logo}
              alt="logo"
              className="footer-logo w-[146px] h-[24px] mx-auto md:mx-0 block md:hidden"
            />
          </div>
          <nav className="grid grid-cols-2 gap-16 mb-8 footer__nav md:mb-0 justify-items-center md:justify-items-start md:gap-0">
            <ul className="flow-content--s justify-self-end md:justify-self-start">
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  pricing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  products
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  about us
                </a>
              </li>
            </ul>
            <ul className="flow-content--s justify-self-start">
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  careers
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  community
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="capitalize duration-300 hover:text-primary"
                >
                  privacy policy
                </a>
              </li>
            </ul>
          </nav>
          <form
            action=""
            className="md:order-[0] order-[-1] mx-auto md:mx-0"
            onSubmit={handleSubmit}
          >
            <div className=" main-wrapper">
              <div className="flex items-center gap-4 mb-12 input-wrapper">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-full placeholder:text-sm text-[#333]"
                  placeholder="Update in your inbox..."
                  name="emailInput"
                />
                <button className="btn btn--primary">Go</button>
              </div>
              {!emailIsValid && (
                <p className="text-red-600 -translate-y-[150%] translate-x-[3%]">
                  Email is not valid
                </p>
              )}
            </div>
            <span className="text-[#9095a7] hidden md:block">
              Copyright 2020. All Rights Reserved
            </span>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
