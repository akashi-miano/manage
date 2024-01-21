import logo from "../assets/logo.svg";
import burgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import { useState } from "react";
import tabletBg from "../assets/bg-tablet-pattern.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <nav className="relative py-14">
      <img
        src={tabletBg}
        alt=""
        className="absolute top-[-100px] right-[-100px] z-[-1]"
      />
      <div className="container flex items-center justify-between">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li>
              <a href="" className="nav__link">
                pricing
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                product
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                about us
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                careers
              </a>
            </li>
            <li>
              <a href="" className="nav__link">
                community
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden btn-wrapper md:block">
          <a href="" className="btn btn--primary">
            get started
          </a>
        </div>
        <div className="mobile-nav md:hidden">
          <img src={burgerIcon} alt="burger icon" onClick={handleNav} />
          <ul
            className={
              nav
                ? "flex items-center gap-4 fixed inset-0 z-[999] bg-green-500 flex-col justify-center h-screen w-screen text-white text-6xl capitalize duration-300 translate-x-[0]"
                : "flex items-center gap-4 fixed inset-0 z-[999] bg-green-500 flex-col justify-center h-screen w-screen text-white text-6xl capitalize translate-x-[100%] duration-300"
            }
          >
            <li>
              <a href="" className="duration-300 nav__link hover:text-zinc-900">
                pricing
              </a>
            </li>
            <li>
              <a href="" className="duration-300 nav__link hover:text-zinc-900">
                product
              </a>
            </li>
            <li>
              <a href="" className="duration-300 nav__link hover:text-zinc-900">
                about us
              </a>
            </li>
            <li>
              <a href="" className="duration-300 nav__link hover:text-zinc-900">
                careers
              </a>
            </li>
            <li>
              <a href="" className="duration-300 nav__link hover:text-zinc-900">
                community
              </a>
            </li>
            <img
              src={closeIcon}
              alt="close icon"
              onClick={handleNav}
              className="close-icon absolute top-[8%] right-[10%] z-[999]"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
