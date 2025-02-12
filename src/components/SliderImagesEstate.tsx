"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

function SliderImagesEstate({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="w-full h-[280px] mobile:h-[350px] flex gap-5">
      {imageIndex !== null && (
        <div className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="flex-[1] flex items-center justify-center"
            onClick={() => changeSlide("left")}
          >
            <ArrowBackIcon className="text-white w-5 mobile:w-12 tablet:w-14" />
          </div>
          <div className="flex-[10]">
            <Image
              className="w-full h-[300px] tablet:h-[800px] object-cover rounded-lg"
              width={1260}
              height={750}
              src={images[imageIndex]}
              alt=""
            />
          </div>
          <div
            className="flex-[1] flex items-center justify-center"
            onClick={() => changeSlide("right")}
          >
            <ArrowForwardIcon className="text-white w-5 mobile:w-12 tablet:w-14" />
          </div>
          <div
            className="absolute top-0 right-0 w-9 p-12 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            <CloseIcon className="text-white"/>
          </div>
        </div>
      )}
      <div className="flex-[3]">
        <Image
          width={1260}
          height={750}
          className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80"
          src={images[0]}
          alt=""
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="flex-[1] flex flex-col justify-between gap-5">
        {images.slice(1).map((image, index) => (
          <Image
            width={1260}
            height={750}
            className="h-[80px] mobile:h-[100px] rounded-lg cursor-pointer hover:opacity-80"
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default SliderImagesEstate;
