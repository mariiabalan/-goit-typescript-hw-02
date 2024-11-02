import React from "react";
import s from "./ImageCard.module.css";
import { Image } from "../../types";

interface ImageCardProps {
  photo: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, onClick }) => {
  const { urls, alt_description } = photo;
  return (
    <div className={s.image_wrapper} onClick={onClick}>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
