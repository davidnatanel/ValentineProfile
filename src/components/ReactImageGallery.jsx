import { useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import imagesP from '../imagesP'

const images = [
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/200/300?image=1050",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/200/300?image=1050",

]

const ReactImageGallery=({viewImage,title,data})=>{
  
    return(
        <>
<h1 style={{textAlign:'center',color:'whitesmoke'}}>{title}</h1>
        <div style={{padding:'2%'}}>
       
        <Masonry columnsCount={4 } gutter="5px">
        {data.map((image, i) => (
            <img
                key={i}
                src={image}
                style={{width: "100%", display: "block", cursor:'pointer'}}
                onClick={()=>viewImage(image,i)}
            />
        ))}
    </Masonry>
    </div></>
    )
}

export default ReactImageGallery;