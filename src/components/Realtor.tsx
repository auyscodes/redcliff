export const Realtor = () => {
  return (
    <div id="realtor" className="flex flex-col  pb-36  ">
      <div
        id="plan"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(06)</div>
        <div className="flex flex-col  lg:basis-11/12">
          <div>
            <p>Realtor</p>
            <p className="text-2xl mt-6 max-w-80">
              Helping You Discover Your Ideal Home
            </p>
          </div>
          <div className="my-16 w-full h-px bg-gray-200"></div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 ">
            <div className="flex flex-col  justify-between">
              <div>
                <h1 className="text-7xl">Max Williams</h1>
                <div className="flex items-center gap-3 text-sm mt-2">
                  <span>Licensed Realtor</span>
                  <div className="w-4 h-px bg-gray-400"></div>
                  <span>ID:RLT-7894-MB</span>
                </div>
              </div>
              <div>
                <p className="text-sm">
                  Meet Max Williams, your dedicated licensed realtor, passionate
                  about turning your real estate dreams into reality. With
                  expertise in navigating the buying or selling process, Max
                  provides personalized service tailored to your needs. He stays
                  ahead of market trends to ensure informed decisions for
                  first-time buyers, seasoned investors, and sellers alike.
                </p>
                <button className="mt-10 bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 ">
                  <a href="#contact">Contact agent</a>
                </button>
              </div>
            </div>
            <div className="mt-10 md:mt-0 flex justify-center rounded-lg bg-gray-500 bg-opacity-10   w-full">
              <img
                className="rounded-lg lg:h-[404px]"
                src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c10e921f8f89231f7bdc6c_Realtor.webp"
                alt="Agent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
