"use client"
import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./components/Gallery";

import api from './api/unsplash';
import { useState } from "react";


export default function Home() {
  const [data,setData] = useState([])
  api.search("apple").then((images) => {
    setData(images);
    console.log(images)
  });
  return (
    <>
      <Gallery data={data}/>
    </>
  );
}
