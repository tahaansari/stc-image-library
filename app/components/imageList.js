import Image from 'next/image'
import React from 'react'

const imageList = ({images}) => {
  return (
    <>
        {images.map((image, index) => (
            <div key={index} className="card">
              <Image width={500} height={500} className="img-fluid" src={image.urls.regular} alt="unsplash image" />
            </div>
          ))}
    </>
  )
}

export default imageList