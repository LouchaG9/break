import React from "react";
import { Link } from "react-router-dom";

const Mindfullness = () => {
  return (
    <>
      <div className="centered-page-content">
        <h1>Hey!</h1>
        <p className="tip">
          This feature isn't quite ready to be shipped yet. <br></br>Fingers
          crossed next time you check it will be available
        </p>
        <Link to="/NewBreak">Take me back</Link>
      </div>
    </>
  );
};

export default Mindfullness;
