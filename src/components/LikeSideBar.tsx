import { Image, toggleLiked } from "../repos/ImageStorage";
import { Close } from "./icons/close";

interface LikeSideBarProps {
  likedImages: Image[] | [] | undefined;
  showSideBar: boolean;
  onHideSideBar: () => void;
}
export const LikeSideBar = ({
  likedImages,
  showSideBar,
  onHideSideBar,
}: LikeSideBarProps) => {
  return (
    <div
      className={
        "fixed inset-0 w-full bg-black bg-opacity-20 z-50 " +
        (showSideBar == true ? "" : "hidden")
      }
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="md:block hidden lg:col-span-2" />
        <div className="col-span-1 bg-white border-l border-gray-400 ">
          <div className="flex flex-col overflow-auto h-screen">
            <div className="flex p-4 flex-row items-center justify-between sticky top-0 pt-8 bg-white z-10">
              <p className="text-black text-xl">Liked Images</p>
              <button
                onClick={onHideSideBar}
                className=" bg-black text-white rounded-md px-4 py-2  hover:bg-opacity-70 "
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-6 px-4">
              {likedImages?.map((x: Image) => {
                return (
                  <div
                    key={x.src}
                    className="relative flex w-full items-center gap-2 rounded-xl overflow-hidden border border-gray-200 bg-white"
                  >
                    <img
                      className="w-32 h-32 object-center object-cover"
                      src={x.src}
                      alt={x.alt}
                    />
                    <p className="text-sm pl-2 line-clamp-4">{x.alt}</p>
                    <div
                      className="cursor-pointer absolute top-2 right-0"
                      onClick={() => {
                        toggleLiked({ src: x.src, alt: x.alt });
                      }}
                    >
                      <Close classNames="w-6 h-6 mr-2 pt-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
