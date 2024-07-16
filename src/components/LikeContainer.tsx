import { Heart } from "./icons/heart";

interface LikeContainerProps {
  numberOfLikedImages: number;
}

export const LikeContainer = ({ numberOfLikedImages }: LikeContainerProps) => {
  return (
    <div className="relative">
      <Heart classNames="w-6 h-6 " filled={numberOfLikedImages > 0} />

      <div
        className={
          "text-white text-sm bg-black text-center rounded-full w-5 h-5 absolute left-4 top-4 " +
          (numberOfLikedImages === 0 ? "hidden" : "")
        }
      >
        {numberOfLikedImages}
      </div>
    </div>
  );
};
