import Link from "next/link";
import ThemeSwitch from "../elements/ThemeSwitch";
import { useEffect } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { IoSearch, IoPerson, IoCartOutline } from "react-icons/io5";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  useEffect(() => {
 
    // Disable text selection for elements
    // with class "no-select"
    const noSelectElements =
        document.querySelectorAll(".no-select");
    noSelectElements.forEach((element) => {
        element.style.webkitUserSelect = "none";
        element.style.mozUserSelect = "none";
        element.style.msUserSelect = "none";
        element.style.userSelect = "none";
    });
}, []);
  return (
    <>
      <header
        className={`main-header bg-[#FFDE59] mx-auto w-full flex justify-center py-4 z-50  dark:bg-primary-dark-0 ${
          scroll ? "fixed" : "relative"
        }`}
      >
        <div className="container flex justify-between items-center relative px-4">
          {/* <h1>
                        <Link href="/">
                            <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718383728/qt_q_95_whjcqz.webp" alt="logo" className="w-24 flex-shrink-0 relative dark:hidden" />
                            <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1718383728/qt_q_95_whjcqz.webp" alt="logo" className="flex-shrink-0 relative hidden dark:inline-block" />
                        </Link>
                    </h1> */}
          <Menu />
          <div className="flex text-2xl text-[#fff] gap-6">
            <IoSearch />
            <IoPerson />
            <IoCartOutline />
          </div>
          <div className="xl:hidden flex justify-end align-middle content-center items-center relative gap-4">
            <button
              className="navbar-burger self-center xl:hidden"
              onClick={handleMobileMenu}
            >
              <svg
                className="fill-neutral-950 dark:fill-neutral-dark-950"
                id="fi_2976215"
                enableBackground="new 0 0 464.205 464.205"
                height={26}
                viewBox="0 0 464.205 464.205"
                width={26}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g id="grip-solid-horizontal_1_">
                    <path d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z"></path>
                    <path d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012z"></path>
                    <path d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
          {/*Mobile Menu*/}
          <MobileMenu
            isMobileMenu={isMobileMenu}
            handleMobileMenu={handleMobileMenu}
          />
        </div>
      </header>
    </>
  );
}
