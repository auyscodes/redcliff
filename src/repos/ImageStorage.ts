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

export const getImages = (): Image[] => {
  const retrievedData = localStorage.getItem("images");
  return retrievedData ? JSON.parse(retrievedData) : [];
};

export const addToLiked = async (image: Image): Promise<Image[]> => {
  const images = getImages();

  if (!images.some(img => img.src === image.src)) {
    images.push(image);
    await localStorage.setItem("images", JSON.stringify(images));
  }
  window.dispatchEvent(new Event("storage"));

  return images;
};

export const removeLiked = async (image: Image): Promise<Image[]> => {
  const images = getImages();

  const index = images.findIndex(img => img.src === image.src);
  if (index !== -1) {
    images.splice(index, 1);
    await localStorage.setItem("images", JSON.stringify(images));
  }
  window.dispatchEvent(new Event("storage"));

  return images;
};

export const toggleLiked = async (image: Image): Promise<Image[]> => {
  if (isLiked(image)) {
    return removeLiked(image);
  } else {
    return addToLiked(image);
  }
};