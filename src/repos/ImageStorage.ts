export interface Image {
  src: string;
  alt: string;
}
export const isLiked = (image: Image) => {
  const retrievedData = localStorage.getItem("images");
  if (retrievedData) {
    const images = JSON.parse(retrievedData);
    if (images?.map((x: Image) => x.src).includes(image.src)) {
      return true;
    }
  }

  return false;
};
export const getImages = () => {
  const retrievedData = localStorage.getItem("images");
  if (retrievedData) {
    return JSON.parse(retrievedData);
  }

  return [];
};
export const addToLiked = (image: Image) => {
  const retrievedData = localStorage.getItem("images");
  if (retrievedData) {
    const images = JSON.parse(retrievedData);
    if (!images?.map((x: Image) => x.src).includes(image.src)) {
      images.push(image);
      localStorage.setItem("images", JSON.stringify(images));
    }
  } else {
    localStorage.setItem("images", JSON.stringify([image]));
  }
  window.dispatchEvent(new Event("storage"));
};
export const removeLiked = (image: Image) => {
  const retrievedData = localStorage.getItem("images");
  if (retrievedData) {
    const images = JSON.parse(retrievedData);
    const index = images.map((x: Image) => x.src).indexOf(image.src);
    images.splice(index, 1);
    localStorage.setItem("images", JSON.stringify(images));
    window.dispatchEvent(new Event("storage"));
  }
};
export const toggleLiked = (image: Image) => {
  if (isLiked(image)) {
    removeLiked(image);
    return;
  }
  addToLiked(image);
};
