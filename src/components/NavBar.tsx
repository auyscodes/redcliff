import { useEffect, useState } from "react";
import { LikeContainer } from "./LikeContainer";

interface NavBarProps {
  onShowSideBar: () => void;
}
export const NavBar = ({ onShowSideBar }: NavBarProps) => {
  const [isNavBarBurgerClicked, setIsNavBarBurgerClicked] = useState(false);
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  });
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((lastState) => {
        return {
          y: window.scrollY,
          lastY: lastState.y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollData.lastY === scrollData.y) {
      return;
    }
    if (scrollData.y > 350 && scrollData.y - scrollData.lastY > 0) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [scrollData]);
  useEffect(() => {
    if (hideNav) {
      setIsNavBarBurgerClicked(false);
    }
  }, [hideNav]);
  return (
    <div
      className={
        "flex w-full z-10 fixed justify-center bg-white navBar " +
        (isNavBarBurgerClicked == true ? "h-full " : "") +
        (hideNav ? "hideNav " : "")
      }
    >
      <div className="container  font-sans px-4 lg:px-12">
        <div className={" container lg:pr-20    "}>
          <div className="flex flex-row justify-between py-7 border-b-gray-300   ">
            <div>
              <button className="border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-400 hover:bg-opacity-15">
                &#x2022; &nbsp;1936 Redcliff
              </button>
            </div>
            <div className="lg:flex hidden gap-2 ">
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#home"
              >
                Home
              </a>
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#overview"
              >
                Overview
              </a>
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#plan"
              >
                Plan
              </a>
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#features"
              >
                Features
              </a>
              <a
                className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md p-2"
                href="#realtor"
              >
                Realtor
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-row items-center gap-6">
              {/* <button className="border border-gray-400 rounded-md px-4 py-2 hover:bg-black hover:text-white ">
          <a href="#contact">Contact </a>
        </button> */}
              <div onClick={onShowSideBar}>
                <LikeContainer />
              </div>

              <a
                className="border border-gray-400 rounded-md px-4 py-2 hover:bg-black hover:text-white "
                href="#contact"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-row gap-8 items-center lg:hidden ">
              <div onClick={onShowSideBar}>
                <LikeContainer />
              </div>
              <div
                onClick={() => setIsNavBarBurgerClicked(!isNavBarBurgerClicked)}
                className="border border-gray-400 rounded-lg w-10 h-10 px-2 flex  "
              >
                <img
                  className={
                    isNavBarBurgerClicked == false ? "block" : "hidden"
                  }
                  src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bce8a884445bf824d9ce_Hamburger%20Menu.svg"
                />
                <img
                  className={
                    isNavBarBurgerClicked == false ? "hidden" : "block"
                  }
                  src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bce82fa7c492cc12200a_Close.svg"
                  alt="Close"
                ></img>
              </div>
            </div>
          </div>
          <div
            onClick={() => setIsNavBarBurgerClicked(!isNavBarBurgerClicked)}
            className={
              isNavBarBurgerClicked == false
                ? "hidden"
                : "flex flex-col text-5xl gap-10 divide-y cursor-pointer mt-16 font-light pr-10 "
            }
          >
            <a className=" rounded-md px-2 py-2" href="#home">
              Home
            </a>
            <a className=" rounded-md px-2 py-2" href="#overview">
              Overview
            </a>
            <a className=" rounded-md px-2 py-2" href="#gallery">
              Gallery
            </a>
            <a className=" rounded-md px-2 py-2" href="#plan">
              Plan
            </a>
            <a className=" rounded-md px-2 py-2" href="#features">
              Features
            </a>
            <a className=" rounded-md px-2 py-2" href="#realtor">
              Realtor
            </a>
            <a className=" rounded-md px-2 py-2" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
