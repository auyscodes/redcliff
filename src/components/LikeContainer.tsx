import { useEffect, useState } from "react";
import { Heart } from "./icons/heart";
import { getImages, Image } from "../repos/ImageStorage";

export const LikeContainer = () => {
  const [likedImages, setLikedImages] = useState<Image[]>([]);
  const hasOneBeenLiked = () => {
    if (likedImages.length > 0) {
      return true;
    }

    return false;
  };
  useEffect(() => {
    setLikedImages(getImages());
    const handleStorage = () => {
      setLikedImages(getImages());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return (
    <div className="relative">
      <Heart classNames="w-6 h-6 " filled={hasOneBeenLiked() ? true : false} />
      <div
        className={
          "text-white text-sm bg-black text-center rounded-full w-5 h-5 absolute left-4 top-4 " +
          (likedImages.length == 0 ? "hidden" : "")
        }
      >
        {likedImages.length}
      </div>
    </div>
  );
};
