import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export const Plan = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={
        "flex flex-col  pb-36 border-b-[1px] border-black border-opacity-10 " +
        (isVisible == true ? "animation-3s" : "")
      }
    >
      <div
        id="plan"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(03)</div>
        <div className="lg:basis-11/12">
          <div className="max-w-[664px]">
            <p>Plan</p>
            <p className="text-2xl mt-4 max-w-[328px]">
              Detailed Exploration of Your Dream Home
            </p>
          </div>
          <div className="flex flex-col mt-16">
            <img
              className="mb-[80px] h-auto"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0fbfcec6e719a387137b2_Floor%20Plan.svg"
              alt="Plan of the house"
            />
            <p className="text-3xl max-w-[891px]">
              Discover the essence of home in our interior space. From cozy
              living areas to inviting bedrooms, each room embodies comfort and
              style. Explore the artful balance of elegant furnishings and
              subtle accents, creating a sanctuary that inspires.
            </p>
            <div className="mt-6 mb-16">
              <button className="bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 ">
                <a href="#contact">Contact agent</a>
              </button>
            </div>

            <div className="flex flex-row flex-wrap md:flex-nowrap gap-8">
              <div className="min-w-80 w-full flex flex-col gap-y-[18px]">
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Kitchen</p>
                    <p>Gourmet Kitchen, Remodeled</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Laundry Room</p>
                    <p>Room, Inside</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Fireplace</p>
                    <p>Gas, Living Room</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Appliances</p>
                    <p>Built-In BBQ, Oven</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
              <div className="min-w-80 w-full flex flex-col gap-y-[18px]">
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Pool</p>
                    <p>In Ground, Heated</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Heat Type</p>
                    <p>Central</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Air Conditioning</p>
                    <p>Central, Multi/Zone</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
                <div className="flex flex-col gap-y-[18px]">
                  <div className="flex ">
                    <p className="basis-1/2">Sewer</p>
                    <p>In Street Paid</p>
                  </div>
                  <div className="w-full h-px bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
