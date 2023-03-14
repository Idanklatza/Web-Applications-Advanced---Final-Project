import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

function ImageWithInfo({ imageUrl, imageAlt, infoText, linkText, linkTo }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <img
        className="card-img-top-home"
        src={imageUrl}
        alt={imageAlt}
        onClick={() => setShowInfo(!showInfo)}
      />
      {showInfo && (
        <div>
          <p className="para">
            {infoText}
            <br></br>
            <Link to="/catalog">Search on our Catalog</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default ImageWithInfo;
