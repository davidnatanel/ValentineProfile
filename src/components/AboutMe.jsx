import style from './AboutMe.module.css'
import myAvatar from "../assets/myAvatar.svg";

const AboutMe =()=>{

    return(
        <div  id={'AboutMe'} className={style.aboutme}>
        <div>
            
            <img src={myAvatar} alt="" />
            <h2>Hola soy Valentina 👋</h2>

        </div>
        
        <div>
<p>soy diseñadora grafica trabaje en varios proyectos con herramientas como 
Corel Draw, Sketchup ,AutoCAD y Canva, Photoshop. Diseño publicitario , multimedia, packaging,
logos de productos y empresas, ilustración digital, campañas publicitarias,
carteles impresos y banners digitales.
<a className={style.descargar} href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Descargar mi cv</a>
  

</p>


        </div>

    </div>
    )
}

export default AboutMe;