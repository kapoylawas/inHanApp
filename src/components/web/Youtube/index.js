/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Youtube = () => {
  return (
    <div className="custom-youtube-player">
      <iframe
        id="player"
        type="text/html"
        style={{ width: "100%", height:"100%" }}
        src="http://www.youtube.com/embed/M7lc1UVf-VE?"
        frameborder="0"
      ></iframe>
      <div className="handle d-flex justify-content-center" >
         <i className="fas fa-arrows-alt"></i>
      </div>
    </div>
  );
};

export default Youtube;
