import React from "react";
import "../blocks/page.css";

const Loading = () => {
  return (
    <div className="page__loading">
      <img
        src="https://cdn.pixabay.com/photo/2022/05/03/09/39/loading-7171342_1280.png"
        alt="Loading Img"
        className="page__loading-image"
      />
    </div>
  );
};

export default Loading;
