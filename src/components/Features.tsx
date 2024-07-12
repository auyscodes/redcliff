import { TwoValueTable } from "./TwoValueTable";

export const Features = () => {
  const interior = {
    Bar: "Inside, in the bedroom",
    "Built-Ins": "Storage and organization solutions",
    "High Ceilings": "9 Feet",
    "Automation System": "Pre-installed",
    "Wet Bar": "In the basement",
  };
  const architecture = {
    "Architecture Style": "Modern House",
    View: "Forest, Lake",
  };
  const other = {
    Gate: "Automatic",
    Yard: "Back Yard",
    Security: "Exterior Lights",
    Detectors: "Carbon Monoxide, Smoke",
  };
  return (
    <div
      id="features"
      className="flex flex-col  pb-36 border-b-[1px] border-black border-opacity-10 "
    >
      <div
        id="plan"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(04)</div>
        <div className="flex flex-col lg:basis-11/12">
          <div className="max-w-[664px]">
            <p>Features</p>
            <p className="text-2xl mt-4 max-w-[328px]">
              Finest Details and Luxurious Amenities
            </p>
          </div>
          <div className="flex flex-row gap-8 mt-10">
            <div className="basis-1/3 flex flex-col">
              <div className="w-full h-[1px] bg-gray-200"></div>
              <h1 className="text-8xl pt-8">48</h1>
              <p className="mt-4">Maximum suitable people occupancy</p>
            </div>
            <div className="basis-1/3 border-opacity-10 flex flex-col">
              <div className="w-full h-[1px] bg-gray-200"></div>
              <h1 className="text-8xl pt-8">5 Min</h1>
              <p className="mt-4">Walk to the nearest bus stop</p>
            </div>
            <div className="basis-1/3 border-opacity-10 flex flex-col">
              <div className="w-full h-[1px] bg-gray-200"></div>
              <h1 className="text-8xl pt-8">0.08</h1>
              <p className="mt-4">Neighborhood crime rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <img
          className="h-[89vh] rounded-lg"
          src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c9d5548f408de00c64a4aa_65c103b7ea46f8e32a7e2a5e_pexels-max-rahubovskiy-8134813.webp"
          alt="Terrace under the open sky on the second floor of the building"
        />
        <div className="flex flex-row mt-16">
          <div className="basis-1/12"></div>
          <div className="basis-11/12">
            <div className="flex flex-col md:flex-row">
              <p className="basis-1/2 mb-10 md:mb-0">Interior features</p>
              <TwoValueTable data={interior} />
            </div>
            <div className="flex flex-col md:flex-row"></div>
            <div className="flex flex-col md:flex-row"></div>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="basis-1/12"></div>
          <div className="basis-11/12">
            <div className="flex flex-col md:flex-row">
              <p className="basis-1/2 mb-10 md:mb-0">Architecture And View</p>
              <TwoValueTable data={architecture} />
            </div>
            <div className="flex flex-col md:flex-row"></div>
            <div className="flex flex-col md:flex-row"></div>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div className="basis-1/12"></div>
          <div className="basis-11/12">
            <div className="flex flex-col md:flex-row">
              <p className="basis-1/2 mb-10 md:mb-0">Other features</p>
              <TwoValueTable data={other} />
            </div>
            <div className="flex flex-col md:flex-row"></div>
            <div className="flex flex-col md:flex-row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
