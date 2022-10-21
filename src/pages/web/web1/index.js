/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
//import layout web

function Web1() {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <iframe
          className="responsive-iframe"
          src={"https://donasiapps.netlify.app"}
        />
      </div>
    </React.Fragment>
  );
}

export default Web1;
