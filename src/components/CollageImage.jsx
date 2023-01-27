import style from './CollageImage.module.css'

const CollageImage=({id,title,data,cssstyle, type,viewImage})=>{
    return (

    <div id={id} className={style.container}>
      <h1>{title}</h1>
      <div className={style.containergrid}>
      {data.map((e,i)=>{
        return(
            <div className={style[cssstyle]}>
            <img  key={i} src={e}   onClick={()=>viewImage(e,i,type)} />
            </div>
            
        )
      })}
      </div>
    
    </div>
    )
}
export default CollageImage