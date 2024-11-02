import s from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <div className={s.image_wrapper}>
      <img
        className={s.image}
        src={photo.urls.small}
        alt={photo.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
