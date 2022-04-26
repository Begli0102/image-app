import React, { useContext } from "react";
import SearchContainer from "./SearchContainer";
import CardContainer from "./CardContainer";
import Pagination from "./Pagination";
import Loading from "./Loading";
import {ImageContext} from "../context/ImageContext";

const MainView = () => {
   const { images } = useContext(ImageContext);
  return (
    <div className="container">
      <SearchContainer style={{ position: "fixed" }} />
      <Loading />
      
       {images.length === 0 ? <h2 className="error">No images found</h2> : <CardContainer />} 
      <Pagination />
    </div>
  );
};

export default MainView;
