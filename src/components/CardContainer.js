import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const CardContainer = () => {
  const { images, currentImages } = useContext(ImageContext);

  return (
    <div className="cardContainer">
      {currentImages.map((image) => (
        <div key={image.id} className="card">
          <img className="image" src={image.webformatURL} alt="photo"></img>
          <div className="cardInfo">
            <p className="user"> Photo by: {image.user}</p>
            <p>
              <i className="fas fa-eye"></i>
              <span>Views: {image.views}</span>
            </p>
            <p>
              <i className="fas fa-download"></i>
              <span>Downloads: {image.downloads}</span>
            </p>
            <p>
              <i className="fas fa-heart"></i>
              <span>Likes: {image.likes}</span>
            </p>
            <p>
              <i className="fas fa-comments"></i>
              <span>Comments: {image.comments}</span>
            </p>
            <div className="tags">
              <i className="fas fa-tags"></i>
              <span>
                {" "}
                {image.tags
                  .split(",")
                  .map((tag, index) =>
                    tag.length >= 11 ? "" : <span key={index}>#{tag} </span>
                  )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
