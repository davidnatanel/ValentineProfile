import { useEffect, useRef, useState } from 'react'
import style from './NavBar.module.css'

const NavBar=()=>{
  
    const headerRef=useRef()
    const navegar=(e)=>{
if (e.target.value != 'null') {
   window.location.href=`#${e.target.value}`
    
}



    }
 
    useEffect(()=>{


        window.addEventListener("scroll",function () {
     console.log(window.scrollY)

           
            if(window.scrollY > 10 ){
                headerRef.current.className=[`${style.NavContainer} ${style.abajo}` ]
            }
            if(window.scrollY == 0 ){
                headerRef.current.className=[`${style.NavContainer} ` ]
            }
            
        })
    
    
    },[])


    return (
        <nav  ref={headerRef} id='navbar' className={style.NavContainer}>
            
            <div  className={style.hidden1}>
                <p translate='no'> ValentineDesing</p>
            </div>
            <ul className={style.hidden2}>
              
                <li> <a  href="#AboutMe">Inicio</a> </li>
                <li><select  onChange={(e)=>navegar(e)}  className={style.select} >
                    <option  value="null">Proyectos</option>
                    <option  value="videos">videos</option>
                    <option  value="logos"> Logos</option>
                    <option value="ilustraciones">Ilustraciones</option>
                    <option  value="tarjetas">Tarjetas</option>
                    </select>
                    </li>
                <li> <a  href="#ContactMe">Contactame</a></li>
                
            </ul>
        
        </nav>
    )
}
export default NavBar