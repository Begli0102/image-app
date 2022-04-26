import React, { useEffect, createContext, useState } from "react";

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "26676448-953749ae499f76d1583c8814e";

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${search}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.hits);
        setImages(response.hits);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue); // setting a search to inputValue
    setInputValue("");
  };

  // Get current airlines
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalImages = images.length;

  return (
    <ImageContext.Provider
      value={{
        images,
        setImages,
        inputValue,
        setInputValue,
        currentPage,
        setCurrentPage,
        imagesPerPage,
        search,
        setSearch,
        loading,
        setLoading,
        handleSubmit,
        currentImages,
        totalImages,
        paginate
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
