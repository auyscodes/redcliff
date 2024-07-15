import { Carousel } from "./Carousel";

export const Home = () => {
  return (
    <div id="home" className="mb-[120px] pt-4 lg:mb-[152px]">
      <div className="mt-[88px] flex ">
        <div className="flex flex-wrap gap-y-12 w-full justify-between ">
          <h1 className="text-8xl max-w-[776px] animation-1s">
            — Dream Single Family House in Silver Lake
          </h1>
          <div className="flex flex-col justify-between max-w-[437px] animation-2s gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">1936 Redcliff St, LA</h2>

              <div className="flex items-center gap-3 text-sm ">
                <span>6 Beds</span>
                <div className="w-4 h-px bg-gray-400"></div>
                <span>2 Bath</span>
                <div className="w-4 h-px bg-gray-400"></div>
                <span>3,760 Sq.Ft.</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                Discover the charm of this single-family home nestled in Silver
                Lake. With its inviting atmosphere and vibrant location, it's
                the perfect place to call home.
              </p>
              <button className="bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 ">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 hideShow">
        <Carousel />
      </div>
    </div>
  );
};
