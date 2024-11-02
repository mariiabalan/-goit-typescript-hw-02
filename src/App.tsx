import { useCallback, useEffect, useState } from "react";
import s from "./App.module.css";
import { fetchPhotos } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErroreMessage";
import ImageGalery from "./components/ImageGallery/ImageGalery";

import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import { Image } from "./types";

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImages] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      const imageWidth = 250;
      const newItemsPerRow = Math.floor(viewportWidth / imageWidth);
      setItemsPerRow(newItemsPerRow);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Викликати при першій загрузці

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === "") {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await fetchPhotos(page, query);
        setPhotos((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query, itemsPerRow]);
  const openModal = useCallback((photo: Image) => {
    setSelectedImages(photo);
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImages(null);
  }, []);
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {!!photos.length && (
        <ImageGalery photos={photos} onImageClick={openModal} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage message="An error occurred while fetching images." />
      )}
      {query && <LoadMoreBtn setPage={() => setPage((prev) => prev + 1)} />}
    </div>
  );
};

export default App;
