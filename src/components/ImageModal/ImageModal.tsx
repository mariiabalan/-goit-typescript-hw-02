import { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../types";
Modal.setAppElement("#root");
interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onRequestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal_content}
      overlayClassName={s.modal_overlay}
    >
      <button onClick={onRequestClose} className={s.btn_close}>
        Close
      </button>
      {image && (
        <div className={s.modal_img_wrapper}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
            className={s.modal_img}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
