import React from "react";
import spinner from "../assests/spinner.gif";

function Loader() {
  return (
    <>
      <div className="img">
        <img src={spinner} alt="Loading" />
      </div>
    </>
  );
}

export default Loader;
