import { useState, useEffect } from "react";
import { getImages, toggleLiked, Image } from "../repos/ImageStorage";
import { Heart } from "./icons/heart";

interface LikeableImageProps {
  className: string;
  src: string;
  alt: string;
  isHidden?: boolean;
}
export const LikeableImage = ({
  className,
  src,
  alt,
  isHidden,
}: LikeableImageProps) => {
  const [likedImages, setLikedImages] = useState<Image[]>([]);

  const isLiked = (imageSrc: string) => {
    return likedImages.some((image) => image.src === imageSrc);
  };

  const toggleLike = async () => {
    const image: Image = { src, alt };

    try {
      const updatedImages = await toggleLiked(image);
      setLikedImages(updatedImages);
    } catch (error) {
      console.error("Error toggling like: ", error);
    }
  };

  const handleStorage = () => {
    setLikedImages(getImages());
  };

  useEffect(() => {
    handleStorage();
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <div className={"relative w-full " + (isHidden ? "hidden" : "")}>
      <img className={className} src={src} alt={alt} />
      <div
        onClick={toggleLike}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <Heart classNames="w-6 h-6 " filled={isLiked(src)} />
      </div>
    </div>
  );
};
