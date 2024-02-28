"use client";
import Image from "next/image";
import Gallery from "./components/Gallery";
import api from "./api/unsplash";
import "./globals.css";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [imageSearch, setImageSearch] = useState("");
  const [images, setImages] = useState([]);

  const imageSearchChanged = (event) => {
    setImageSearch(event.target.value);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    api.search(imageSearch).then((images) => {
      setImages(images);
    });
  };

  const getPhotos = () => {
    console.log("Get Photos Callled");
    api.getPhotos().then((images) => {
      setImages(images);
      console.log(images);
    });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <form onSubmit={(event) => formSubmitted(event)}>
            <div className="d-flex">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Search anything"
                aria-label=".form-control-lg example"
                id="imageSearch"
                name="imageSearch"
                value={imageSearch}
                onChange={(event) => imageSearchChanged(event)}
              ></input>
            </div>
          </form>
        </div>
        <div className="container">
          {/* {images.map((image, index) => (
            <div key={index} className="card">
              <img className="img-fluid" src={image.urls.regular} alt="unsplash image" />
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
