import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure to import the CSS

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSrc, setImageSrc] = useState("");

  const imageCount = 100; // Total number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 50); // Change the speed to 500ms (half a second)

    return () => clearInterval(interval);
  }, [imageCount]);

  useEffect(() => {
    const possibleExtensions = [".jpg", ".png", ".gif", ".jpeg", ".bmp"];
    const basePath = `/images/image${currentIndex + 1}`; // Base path for images

    const loadImage = async () => {
      console.log(`Attempting to load image with index: ${currentIndex + 1}`);
      for (const ext of possibleExtensions) {
        const imagePath = `${basePath}${ext}`;
        console.log(`Requesting image: ${imagePath}`); // Log the request URL

        try {
          const response = await fetch(imagePath);
          if (response.ok) {
            console.log(`Image found and loaded: ${imagePath}`); // Log successful load
            setImageSrc(imagePath); // Set the image source if it's successfully fetched
            return; // Stop checking further once a valid image is found
          } else {
            console.log(`Image not found: ${imagePath}`); // Log if image is not found
          }
        } catch (error) {
          console.error("Error loading image:", error);
        }
      }

      // Fallback to placeholder if no image is found
      console.log("No valid image found, using placeholder.");
      setImageSrc("/images/placeholder.jpg");
    };

    loadImage();
  }, [currentIndex]);

  return (
    <div className="App">
      <div className="App-header">
        <div className="Image-container">
          {imageSrc && (
            <img
              src={imageSrc}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
