import style from "./Projects.module.css";
import imagesP from "../imagesP";


const Projects = ()=>{

    return(
        <div className={style.ContainerProjects}>
     
     <div className={style.Containerimage}>
     {imagesP.map((e,i)=>{
        return(
            <img className={style.image}src={e} alt="" />
        )
     })}
     </div>

        </div>
    )
}

export default Projects;
