import { useEffect, useState } from "react";
import { getImages, Image, toggleLiked } from "../repos/ImageStorage";
import { Close } from "./icons/close";

interface LikeSideBarProps {
  showSideBar: boolean;
  onHideSideBar: () => void;
}
export const LikeSideBar = ({
  showSideBar,
  onHideSideBar,
}: LikeSideBarProps) => {
  const [likedImages, setLikedImages] = useState<Image[]>([]);

  useEffect(() => {
    setLikedImages(getImages());
    const handleStorage = () => {
      setLikedImages(getImages());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return (
    <div
      className={
        "fixed  w-full bg-black bg-opacity-20  z-10  " +
        (showSideBar == true ? "" : "hidden")
      }
    >
      <div className="grid grid-cols-3 mr-2">
        <div className="col-span-2"></div>
        <div className="col-span-1 bg-white border-l border-gray-400 ">
          <div className="flex flex-col overflow-scroll pt-8 h-screen">
            <div className="flex p-4 flex-row items-center justify-between sticky">
              <p className="text-black text-xl">Liked Images</p>
              <button
                onClick={onHideSideBar}
                className=" bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 "
              >
                Close
              </button>
            </div>
            {likedImages.map((x: Image) => {
              return (
                <div className="m-4 flex flex-col gap-2  rounded-lg border border-gray-400 bg-black bg-opacity-5">
                  <div className="flex flex-row justify-between w">
                    <p className="text-sm pl-2">{x.alt}</p>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        toggleLiked({ src: x.src, alt: x.alt });
                      }}
                    >
                      <Close classNames="w-6 h-6 mr-2 pt-1" />
                    </div>
                  </div>
                  <img
                    className="w-full h-60 object-center  object-cover rounded-b-lg"
                    src={x.src}
                    alt={x.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
