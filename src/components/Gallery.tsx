export const Gallery = () => {
  return (
    <div className="flex flex-col  pb-36 border-b-[1px] border-black border-opacity-10 ">
      <div
        id="gallery"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(02)</div>
        <div className="lg:basis-11/12">
          <div className="max-w-[664px]">
            <p>Gallery</p>
            <p className="text-2xl mt-4 max-w-[328px]">
              Discover Stylish Spaces and Inspiring Details
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div>
          <img
            className="h-[89vh] rounded-lg"
            src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f342c964e153bd2e8f06_pexels-max-rahubovskiy-8134750.webp"
            alt="Big Modern House with Swiming Pool"
          />
        </div>
        <div className="md:grid md:grid-cols-2 mt-4 gap-4">
          <div className="flex flex-col gap-4">
            <img
              className="sm:h-[240px] md:h-[440px] lg:h-[720px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f34ddcd92b16d701a42b_pexels-max-rahubovskiy-8134744.webp"
              alt="Swimming pool in front of the house"
            />
            <img
              className="sm:h-[320px] md:h-[416px] lg:h-[743px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f327f0c0014033f4af81_pexels-max-rahubovskiy-8134848.webp"
              alt="The front yard of the house with a garage"
            />
          </div>
          <div className="flex flex-col mt-4 md:mt-0 gap-4">
            <img
              className="sm:h-[240px] md:h-[296px] lg:h-[880px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f34229141c1f8b081d60_pexels-max-rahubovskiy-8134751.webp"
              alt="The road in the yard of the house"
            />
            <img
              className="sm:h-[320px] md:h-[560px] lg:h-[583px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f327e9749d9aa870683b_pexels-max-rahubovskiy-8134846.webp"
              alt="Balcony in the front yard of the house"
            />
          </div>
        </div>
        <div className="mt-4">
          <img
            className="h-[89vh] rounded-lg"
            src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f342abc1e2bfdcfb467e_pexels-max-rahubovskiy-8134762.webp"
            alt="Living room with stairs to the second floor"
          />
        </div>
        <div className="md:grid md:grid-cols-3 gap-4 mt-4">
          <div className="md:col-span-2 flex flex-col gap-4">
            <img
              className="sm:h-[200px] md:h-[200px] lg:h-[640px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f342e817a71f15f43d89_pexels-max-rahubovskiy-8134763.webp"
              alt="A sofa in the living room with panoramic windows"
            />
            <img
              className="sm:h-[320px] md:h-[408px] lg:h-[440px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f3427537e3627332fdb1_pexels-max-rahubovskiy-8134771.webp"
              alt="Large bedroom with suspended ceiling and lighting"
            />
          </div>
          <div className="md:col-span-1 mt-4 md:mt-0 flex flex-col gap-4">
            <img
              className="sm:h-[240px] md:h-[288px] lg:h-[400px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f34db414391d66eeb380_pexels-max-rahubovskiy-8134749.webp"
              alt="A sink with a mirror in the bathroom"
            />
            <img
              className="sm:h-[400px] md:h-[320px] lg:h-[680px] rounded-lg"
              src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0f3423ca06eb6755d2b03_pexels-max-rahubovskiy-8134802.webp"
              alt="A table in the living room"
            />
          </div>
        </div>
      </div>
    </div>
  );
};