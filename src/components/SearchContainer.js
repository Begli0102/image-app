import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const SearchContainer = () => {
  const { inputValue, setInputValue, handleSubmit } = useContext(ImageContext);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Search an image"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchContainer;
