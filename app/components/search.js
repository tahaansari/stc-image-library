"use client"
import React from 'react'
import { useEffect, useState } from "react";
import api from "../api/unsplash";
import ImageList from './imageList';

const search = ({data}) => {

  const [imageSearch, setImageSearch] = useState("");
  const [images, setImages] = useState(data)
  
  const imageSearchChanged = (event) => {
    setImageSearch(event.target.value);
  };

  const formSubmitted = (event) => {
    event.preventDefault();
    console.log("before request")
    api.search(imageSearch).then((images) => {
      console.log("after response")
      console.log(images)
      setImages(images);
    });
  };

  return (
    <div>
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
          <ImageList images={images}/>  
        </div>
    </div>
  )
}

export default search