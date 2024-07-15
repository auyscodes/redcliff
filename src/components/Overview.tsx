import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

export const Overview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      id="overview"
      className={
        "flex flex-wrap lg:flex-nowrap w-full pb-36 border-b-[1px] border-black border-opacity-10 " +
        (isVisible == true ? "animation-3s" : "")
      }
    >
      <div className="lg:basis-1/12 pb-8">(01)</div>
      <div className="lg:basis-11/12">
        <div>
          <div className="flex flex-wrap max-w-[664px]">
            <div className="basis-1/2">
              <p>Location</p>
              <p>
                1936 Redcliff St, Los Angeles, <br />
                CA 90039, USA
              </p>
            </div>
            <div>
              <p>Neighborhood</p>
              <p>Silver Lake</p>
            </div>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap  gap-x-[130px] mt-16">
            <div className="max-w-[664px] mb-20">
              <p className="text-2xl leading-8">
                Step into the warmth of Silver Lake living with this inviting
                residence. Nestled in a prime location, this home offers the
                perfect blend of comfort and convenience. Embrace the allure of
                modern living against the backdrop of a vibrant neighborhood.
              </p>
              <p className="mt-10">
                Step into the heart of the home, where an open layout
                effortlessly merges the living, dining, and kitchen spaces.
                Flooded with natural light, the interior boasts elegant finishes
                and designer details at every turn.
              </p>
              <div className="mt-32">
                <p>Price</p>
                <p className="text-4xl mt-2">$1,150,000</p>
              </div>
            </div>
            <div className="min-w-80 w-full flex flex-col gap-y-[18px]">
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Category</p>
                  <p>Family House</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Status</p>
                  <p>For Sale</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Year Built</p>
                  <p>2018</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Bedrooms</p>
                  <p>6</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Bathrooms</p>
                  <p>2</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Square Footage</p>
                  <p>3,760</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Car Garage</p>
                  <p>3</p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
              <div className="flex flex-col gap-y-[18px]">
                <div className="flex ">
                  <p className="basis-1/2">Floors</p>
                  <p> 2 </p>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
