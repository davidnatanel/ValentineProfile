import { useEffect, useRef, useState } from 'react';
import { BsInstagram ,BsLinkedin} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';

const ContainerVideo=({style,videosrc})=>{
    const vref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver((entries) =>{
       
     
        if (entries[0].isIntersecting == false) {
            vref.current.pause()
        }
    }
      );
      observer.observe(vref.current);
     
    }, []);

    return (
        <>
     

        <video  ref={vref} controls  preload="metadata" className={style.video}  >

        <source   src={videosrc} type="video/mp4"/>
        
        
                            </video>
                            </>
        
    )
}
export default ContainerVideo