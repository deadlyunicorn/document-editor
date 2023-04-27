import {  useEffect, useState } from "react";


const Alert=()=>{
  

  const [posX,setPosX]=useState(0);
  const [posY,setPosY]=useState(0);

  useEffect(()=>{
    setPosX(window.scrollX+300)
    setPosY(window.scrollY+60)

  },[])

  const [isMinimized,setIsMinimized]=useState(false);
  
  if(!isMinimized){
    return(
      <div className="
      bg-purple-100 text-xl text-blue-500
      w-96 h-32 rounded-lg px-4 items-center flex flex-col absolute"
      style={
        { 
          // CSS here
          right:posX,
          top:posY
        }
      }
      >
        <button onClick={()=>{setIsMinimized(true)}}>Minimize</button>
        <div className="text-red-500">

          You might have added too much text.
          <br/> Please make sure there is no content
          <br/> hidden in the document.
        </div>

      </div>
    )
  }
  else{
    return(
      <button 
        onClick={()=>{setIsMinimized(false)}}
        style={{top:posY,right:0}}
        className="
          bg-purple-100 text-5xl text-red-500
          w-16 h-16 rounded-s-lg
          flex justify-center items-center absolute">
        !
      </button>
    )
  }
  
}

export default Alert;