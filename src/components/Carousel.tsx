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
  return (
    <div className="h-[89vh] min-h-[480px]">
      <div>
        {imageDesc.map((e) => {
          return <div key={e.id}></div>;
        })}
      </div>
    </div>
  );
};
