export const Home = () => {
  return (
    <div className="mb-[120px] lg:mb-[152px]">
      <div className="mt-[88px] flex ">
        <div className="flex flex-wrap gap-y-[48px] w-full justify-between ">
          <h1 className="text-8xl max-w-[776px]">
            — Dream Single Family House in Silver Lake
          </h1>
          <div className="flex flex-col justify-between max-w-[437px]">
            <div className="flex flex-col">
              <h2 className="text-2xl">1936 Redcliff St, LA</h2>

              <div className="flex items-center gap-3 text-sm mt-2">
                <span>6 Beds</span>
                <div className="w-[16px] h-[1px] bg-gray-400"></div>
                <span>2 Bath</span>
                <div className="w-[16px] h-[1px] bg-gray-400"></div>
                <span>3,760 Sq.Ft.</span>
              </div>
            </div>
            <div className="mt-[32px]">
              <p className="mb-[24px]">
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
      <div className="mt-[96px]">
        
      </div>
    </div>
  );
};
