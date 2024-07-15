import { useEffect, useState } from "react";
import { getImages, toggleLiked, Image } from "../repos/ImageStorage";
import { Heart } from "./icons/heart";

interface LikeableImageProps {
  className: string;
  src: string;
  alt: string;
  isHidden: boolean;
}
export const LikeableImage = ({
  className,
  src,
  alt,
  isHidden,
}: LikeableImageProps) => {
  const [likedImages, setLikedImages] = useState<Image[]>([]);
  const isLiked = (image: string) => {
    if (likedImages.map((x) => x.src).includes(image)) {
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
    <div className={"relative " + (isHidden ? "hidden" : "")}>
      <img className={className} src={src} alt={alt} />
      <div
        onClick={() => {
          toggleLiked({ src: src, alt: alt });
        }}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <Heart classNames="w-6 h-6 " filled={isLiked(src) ? true : false} />
      </div>
    </div>
  );
};
