/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Web2(params) {
  return (
    <React.Fragment>
      <div className="container mt-5">
        <iframe
          className="responsive-iframe"
          src={"https://demos.creative-tim.com/notus-react/?_ga=2.245782596.1554133793.1666323019-519863003.1666323019#/"}
        />
      </div>
    </React.Fragment>
  );
}

export default Web2;
