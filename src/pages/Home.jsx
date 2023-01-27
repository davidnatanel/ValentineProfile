import NavBar from "../components/NavBar";
import style from "./Home.module.css";
import ReactImageGallery from "../components/ReactImageGallery";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import { useState } from "react";
import ContactMe from "../components/ContactMe";
import ReactVideoGallery from "../components/ReactVideoGallery";
import imagesP from "../imagesP";
import logosP from "../logosP";
import tarjetasP from "../tarjetasP";
import CollageImage from "../components/CollageImage";



const Home = ()=>{
    const [data,setData]=useState({img:'',i:0,type:''});

    const viewImage=(img,i,type)=>{
        setData({img,i,type})
    }
    const imgAction=(action)=>{
     let i = data.i;
     const type = data.type;
   console.log(data)
   console.log(type)



     switch (type) {
        case 'logos':
            if(action === 'next-img'){
                setData((prev) => { return{img:logosP[i + 1], i:i + 1} });
             }
             if(action === 'previous-img'){
                setData((prev) => { return{img:logosP[i - 1], i:i - 1,type:type} });

             }
             if(!action ){
                setData((prev) => { return{img:'', i:'',type:''} });

             }
        
            break;
            case 'ilustraciones':
                if(action === 'next-img'){
                setData((prev) => { return{img:imagesP[i + 1], i:i + 1} });

                 }
                 if(action === 'previous-img'){
                setData((prev) => { return{img:imagesP[i - 1], i:i - 1,type:type} });

                 }
                 if(!action ){
                    setData((prev) => { return{img:'', i:'',type:''} });

                 }
            
                break;
                case 'tarjetas':
                    if(action === 'next-img'){
                setData((prev) => { return{img:tarjetasP[i + 1], i:i + 1} });

                     }
                     if(action === 'previous-img'){
                setData((prev) => { return{img:tarjetasP[i - 1], i:i - 1} });

                     }
                     if(!action ){
                        setData((prev) => { return{img:'', i:'',type:''} });

                     }
                
                    break;
       
     }

     setData((prev) => { return{...prev, type} });


    }
    return(
        <>

     {  data.img &&  <div className={style.functionImage} >
            <button onClick={()=>{imgAction()}} className={style.Close}   >X</button>
            <button onClick={()=>{imgAction('previous-img')}} className={style.Previous}    >Previous</button>
            <img src={data.img} className={style.ImgContainer}  />
            <button onClick={()=>{imgAction('next-img')}} className={style.Next}   >Next</button>
        </div>

}

        <div className={style.ContainerHome}>
            <NavBar/>
            <AboutMe/>
      {/*      <ReactImageGallery data={imagesP} title={'ilustraciones'} viewImage={viewImage}/>*/}
<ReactVideoGallery  viewImage={viewImage}/>


<CollageImage id={'logos'}  viewImage={viewImage} cssstyle={'containerimglogo'} title={'Logos'} data={logosP} type={'logos'} />
<CollageImage id={'ilustraciones'}  viewImage={viewImage} cssstyle={'containerimgilustraciones'} title={'Ilustraciones'} data={imagesP} type={'ilustraciones'}/>
<CollageImage id={'tarjetas'}  viewImage={viewImage} cssstyle={'containerimgtarjeta'} title={'Tarjetas'} data={tarjetasP} type={'tarjetas'}/>

<ContactMe />

{/* <video controls style={{width:'100%'}} src={coco}></video> */}

        </div>
        </>
    )
}

export default Home;
