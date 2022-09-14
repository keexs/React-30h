import ImageCarouselStyle from "./style/ImageCarouselStyle";
import Photo from "../Photo/Photo";
import Button from "../Button/Button";
import { useState } from "react";
import sliderImages from "../../data/sliderImages";

const ImageCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const handleOnClickPrev = () => {
    const newCurrentPhoto =
      currentPhoto <= 0 ? sliderImages.length - 1 : currentPhoto - 1;
    setCurrentPhoto(newCurrentPhoto);
  };
  const handleOnClickNext = () => {
    const newCurrentPhoto =
      currentPhoto >= sliderImages.length - 1 ? 0 : currentPhoto + 1;
    setCurrentPhoto(newCurrentPhoto);
  };

  return (
    <>
      <ImageCarouselStyle>
        <Photo {...sliderImages[currentPhoto]} />
        <div>
          <Button text="<" onClick={handleOnClickPrev} />
          <Button text=">" onClick={handleOnClickNext} />
        </div>
      </ImageCarouselStyle>
    </>
  );
};

export default ImageCarousel;
