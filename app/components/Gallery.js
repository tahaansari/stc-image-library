import Image from "next/image";
import React from "react";
import Filter from "./Filter";

const Gallery = ({ data }) => {
  return (
    <div>
      {/* <Filter /> */}
      {/* {data.map((item) => (
        <Image src={item.urls.small} width={500} height={500} alt="image" />
      ))} */}
    </div>
  );
};

export default Gallery;
