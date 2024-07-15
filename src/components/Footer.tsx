import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export const Footer = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div className="pb-20">
      <div className="flex flex-col lg:flex-row gap-6 justify-between pt-[35px]   border-b border-gray-400 ">
        <div>
          <button className="border border-gray-400 rounded-md px-3 py-1 mb-6 hover:bg-gray-400 hover:bg-opacity-15">
            &#x2022; &nbsp;1936 Redcliff
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4  ">
          <a className="text-gray-400 hover:text-white" href="#home">
            Home
          </a>
          <a className="text-gray-400 hover:text-white" href="#overview">
            Overview
          </a>
          <a className="text-gray-400 hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="text-gray-400 hover:text-white" href="#plan">
            Plan
          </a>
          <a className="text-gray-400 hover:text-white" href="#features">
            Features
          </a>
          <a className="text-gray-400 hover:text-white" href="#realtor">
            Realtor
          </a>
          <a className="text-gray-400 hover:text-white" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="w-5 h-5"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bd2a6d4bb5444c938edd_Facebook.svg"
              loading="lazy"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <img
              className="w-5 h-5"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bd292ae041403a3c122a_Twitter%20(X).svg"
              loading="lazy"
              alt="X (Twitter)"
            />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img
              className="w-5 h-5"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bd2a7baead22b868ea71_LinkedIn.svg"
              loading="lazy"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-gray-400">
        <p className="text-sm">© 2024, All Rights Reserved</p>
        <p className="text-sm">Licences</p>
      </div>
      <div
        ref={ref}
        className={
          "mt-20 text-rgray " + (isVisible == true ? "animation-3s" : "")
        }
      >
        <p className="text-[15vw] leading-[81%]">1936 Redcliff</p>
      </div>
    </div>
  );
};
