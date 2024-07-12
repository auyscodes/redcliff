export const Neighborhood = () => {
  return (
    <div className="flex flex-col  pb-36 border-b-[1px] border-black border-opacity-10 ">
      <div
        id="plan"
        className="mt-36 flex flex-col lg:flex-row lg:flex-nowrap w-full"
      >
        <div className="lg:basis-1/12 pb-8">(05)</div>
        <div className="flex flex-col md:flex-row lg:basis-11/12">
          <div className="basis-2/5">
            <p>Neighborhood</p>
          </div>
          <div className="basis-3/5">
            <p className="text-2xl">
              Silver Lake, nestled in Los Angeles, is a vibrant neighborhood
              known for its artistic flair, diverse community, and scenic
              reservoir. Developed in the early 20th century, it has become a
              sought-after destination for its unique charm and convenient
              location.
            </p>
            <p className="mt-10">
              The neighborhood is renowned for its thriving arts and music
              scene, with numerous galleries, theaters, and music venues dotting
              the streets. Residents enjoy easy access to a variety of dining
              options, ranging from hip cafes and gourmet eateries to trendy
              bars and food trucks, offering an eclectic mix of cuisines to suit
              every palate.
            </p>
            <button className="mt-10 bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 ">
              <a href="#contact">Contact agent</a>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <img
          className="rounded-lg h-[89vh] w-full"
          src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c9d26128fb43ddfa44c702_65c10a117505cd18960559bd_j-king-ebuixpviQH0-unsplash%202.webp"
          alt="Buildings from a bird's eye view"
        />
      </div>
    </div>
  );
};
