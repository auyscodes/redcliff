import { useState } from "react";
import { LikeableImage } from "./LikeableImage";

export const Carousel = () => {
  const imageDesc = [
    {
      id: 1,
      imageDesc: "Side Property Perspective",
      imageSrc:
        "https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0c3cd0489cca094b55d5d_Slider%20Photo%201.webp",
    },
    {
      id: 2,
      imageDesc: "Swimming Pool & Comfy Back Yard",
      imageSrc:
        "https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0c3cdea46f8e32a569dd1_Slider%20Photo%202.webp",
    },
    {
      id: 3,
      imageDesc: "Pool & Back Yard From Back Perspective",
      imageSrc:
        "https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0c3ceb021d66162ef7450_Slider%20Photo%203.webp",
    },
    {
      id: 4,
      imageDesc: "Parking & Main Entrance",
      imageSrc:
        "https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0c3cd5c15d589b33a96a7_Slider%20Photo%204.webp",
    },
    {
      id: 5,
      imageDesc: "Convenient Driveway & Modern Gate",
      imageSrc:
        "https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0c3cd4f860782fe205f19_Slider%20Photo%205.webp",
    },
  ];
  const [selectedImage, setSelectedImage] = useState(1);
  const nextSlide = () => {
    const index =
      selectedImage + 1 <= imageDesc.length - 1 ? selectedImage + 1 : 0;
    setSelectedImage(index);
  };
  const prevSlide = () => {
    const index =
      selectedImage - 1 >= 0 ? selectedImage - 1 : imageDesc.length - 1;
    setSelectedImage(index);
  };
  return (
    <div className="relative w-full rounded-lg flex justify-center items-center">
      {imageDesc.map((e, index) => {
        return (
          <div
            key={index}
            className={
              index === selectedImage
                ? "rounded-lg w-full h-screen overflow-hidden"
                : "hidden"
            }
          >
            <LikeableImage
              className="block w-full h-full object-center object-cover"
              src={e.imageSrc}
              alt={e.imageDesc}
            />
          </div>
        );
      })}
      <div
        onClick={prevSlide}
        className="absolute left-5 md:left-10 hover:cursor-pointer flex justify-center items-center rounded-full bg-white backdrop-blur w-16 h-16 bg-opacity-10"
      >
        <img
          className="w-6 h-6 object-center object-cover"
          src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bd2a3ab226220872e6c9_Arrow-Left.svg"
          loading="lazy"
          alt="Left"
        />
      </div>
      <div
        onClick={nextSlide}
        className="absolute right-5 md:right-10 hover:cursor-pointer w-16 h-16 flex justify-center items-center rounded-full backdrop-blur bg-white bg-opacity-10"
      >
        <img
          className="w-6 h-6 object-center object-cover"
          src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bd2a307c2aaf82dfe39d_Arrow-Right.svg"
          loading="lazy"
          alt="Right"
        />
      </div>
      <div className="absolute bottom-10 inset-x-5 md:inset-x-10 flex justify-between items-center  text-white">
        <div className="text-4xl">
          {(selectedImage + 1).toString().padStart(2, "0")}/
          {imageDesc.length.toString().padStart(2, "0")}
        </div>

        <p className=" text-md text-right text-white">
          {imageDesc[selectedImage].imageDesc}
        </p>
      </div>
      <div className="flex gap-2 absolute bottom-6">
        {imageDesc.map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(index);
              }}
              className={
                index === selectedImage
                  ? "rounded-full w-2 h-2 bg-white  cursor-pointer"
                  : "rounded-full w-2 h-2 bg-white bg-opacity-50 cursor-pointer"
              }
            />
          );
        })}
      </div>
      {/* <div className="bottom-10 text-md max-w-[168px] text-right text-white right-10 absolute">
        {imageDesc[selectedImage].imageDesc}
      </div> */}
    </div>
  );
};
