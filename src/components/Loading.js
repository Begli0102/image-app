import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const Loading = () => {
  const { loading } = useContext(ImageContext);
  return <div className="loading">{loading ? <h2>Loading...</h2> : ""}</div>;
};

export default Loading;
