import { FcLikePlaceholder } from "react-icons/fc";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGalery.module.css";
import { RiUserSharedFill } from "react-icons/ri";

const ImageGalery = ({ photos, onImageClick }) => {
  return (
    <ul className={s.gallery}>
      {photos.map((photo, index) => (
        <li className={s.image} key={`${photo.id}-${index}`}>
          <div onClick={() => onImageClick(photo)}>
            <ImageCard photo={photo} />
            <div className={s.image_info}>
              <RiUserSharedFill /> {photo.user.name} &nbsp;
              <FcLikePlaceholder /> {photo.likes}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGalery;
