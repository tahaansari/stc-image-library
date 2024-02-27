import Image from 'next/image'
import React from 'react'


const Gallery = ({data}) => {
  return (
    <div>
        {
          data.map((item)=>(
            <Image src={item.urls.small} width={500} height={500} alt='image'/>
          ))
        }
    </div>
  )
}

export default Gallery