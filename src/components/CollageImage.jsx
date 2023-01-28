import { useState } from 'react'
import style from './CollageImage.module.css'

const CollageImage=({id,title,data,cssstyle, type,viewImage})=>{
const [plus,setPlus]=useState(true)
  
    return (

    <div id={id} className={style.container}>
      <h1>{title}</h1>
      <div className={style.containergrid}>
      {data.slice(0,plus == false ? data.length:4 ).map((e,i)=>{
        return(
            <div className={style[cssstyle]}>
            <img  key={i} src={e}   onClick={()=>viewImage(e,i,type)} />
            </div>
            
        )
      })}
      </div>
      <div className={style.button}>
        {plus == false?<button  onClick={()=>setPlus(true)} className={style.vermenos}>ver menos</button>:
              <button  onClick={()=>setPlus(false)} className={style.vermas}>ver mas</button>

        }
   

      </div>

    
    </div>
    )
}
export default CollageImage