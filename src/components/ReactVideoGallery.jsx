import { useEffect, useRef, useState } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import videosP from "../videosP"
import style from "./ReactVideoGallery.module.css"

import Slider from "react-touch-drag-slider";
import styled, { createGlobalStyle, css } from "styled-components";
import ContainerVideo from "./ContainerVideo";




const ReactVideoGallery=()=>{


    const [index, setIndex] = useState(1);

    const setFinishedIndex = (i) => {
     
      setIndex(i);
    };
  
    const next = () => {
    
      if (index < videosP.length - 1) setIndex(index + 1);
      
    };
  
    const previous = () => {
      if (index > 0) setIndex(index - 1);
    };

    
  
    return(
        <>
      
        <AppStyles id="videos">
          <Button  onClick={previous} left disabled={index === 0}>
            〈
          </Button>
          <Button onClick={next} right disabled={index === videosP.length - 1}>
            〉
          </Button>
          <Slider
            onSlideComplete={setFinishedIndex}
            onSlideStart={(i) => {
              console.clear();
              console.log("started dragging on slide", i);
            }}
            activeIndex={index}
            threshHold={50}
            transition={0.3}
            scaleOnDrag={true}
          >
            {videosP.map((e, i) => (
             
                 
                    <ContainerVideo key={i} style={style} videosrc={e} />
        
            ))}
          </Slider>
        </AppStyles>
      </>
    )
}

export default ReactVideoGallery;





// The slider will fit any size container, lets go full screen...
const AppStyles = styled.main`
    position: relative;
    margin-bottom:10px;
    margin-top:10px;
  height: 500px;
  width: 100%;
`;

const Button = styled.button`
border: none;
color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;


background-color: rgba(150, 107, 101, 0.941);


  font-size: 2rem;
  z-index: 2;
  position: absolute;
  top: 50%;
  ${(props) =>
    props.right
      ? css`
      border-radius: 0px 10px 10px 0px;


          right: 5px;
        `
      : css`
    border-radius: 10px 0px 0px 10px;

          left: 5px;
        `}
`;
