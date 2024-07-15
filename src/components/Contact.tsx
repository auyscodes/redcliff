import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      id="contact"
      className={
        "flex flex-col  pb-36 border-b-[1px] border-gray-400  " +
        (isVisible == true ? "animation-3s" : "")
      }
    >
      <div
        id="plan"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(07)</div>
        <div className="flex flex-col  lg:basis-11/12">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col justify-between">
              <div>
                <p>Contact</p>
                <p className="text-3xl mt-6 max-w-80">
                  Reach Out, Connect, and Start Your Path to Home
                </p>
              </div>
              <div className="mt-16 md:mt-0">
                <p className="text-sm text-gray-400">
                  Looking for Expedited Assistance?
                </p>
                <p className="text-3xl mt-4">+1 (405) 288-2248</p>
                <p className="text-3xl mt-2">hello@newhouse.com</p>
              </div>
            </div>
            <div className="basis-2/5 flex flex-col mt-12 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  className=" bg-rblack py-4 text-sm border-gray-400 border-b outline-none focus:border-white"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className=" bg-rblack py-4 text-sm border-gray-400 border-b outline-none focus:border-white"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className=" bg-rblack py-4 text-sm border-gray-400 border-b outline-none focus:border-white"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className=" bg-rblack py-4 text-sm border-gray-400 border-b outline-none focus:border-white"
                  placeholder="Phone"
                />
              </div>
              <textarea
                className="bg-rblack mt-4 text-sm border-gray-400 outline-none border-b"
                rows={4}
                placeholder="How can we help you?"
              ></textarea>
              <div>
                <button className="mt-10 bg-white text-black  rounded-md px-4 py-2  ">
                  Send a message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
