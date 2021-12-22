import "./styles.css";
import React, { useState } from "react";

import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }, props) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">
        Loading all your favourite images...
      </label>
      <progress max="100" value={calculatedWidth} id="images-loaded"></progress>
    </div>
  </aside>
);

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  // 1 < 2 ? console.log("this is if") : console.log("this is else")

  const handleClick = () => {
    const length = images.length - 1;
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
      // if (currentImage < length) {
      //   // do something here
      //   return currentImage + 1;
      // } else {
      //   // do something else
      //   return 0;
      // }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };
  console.log((numLoaded / images.length) * 100);
  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Moss
        </h2>
      </header>

      <figure className="image-container">
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption className="counter">
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            // style={{ opacity: currentImage === index ? 1 : 0 }}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
}
