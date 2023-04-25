import { ReactNode, useState } from "react";
import {Raleway} from "next/font/google";

const raleway = Raleway({subsets:['latin'],weight:"400"});

const Menu = ({posX,posY,setMenuShow,setSelectedText,selectedText}:
  {posX:number,posY:number,
    setMenuShow:(x:boolean)=>void,
    selectedText:string,setSelectedText:(text:string)=>void}) => {

  const setBold = (isClicked:boolean,setClicked:(boolean:boolean)=>void) =>{
    if(!isClicked){
      setSelectedText(`<b> ${selectedText} </b>`); setClicked(true);
    }
    else if(isClicked){
      setSelectedText(selectedText.split('<b>').join("").split('</b>').join(" "));setClicked(false)
    }
  };

  const setItalic = (isClicked:boolean,setClicked:(boolean:boolean)=>void) =>{
    if(!isClicked){
      setSelectedText(`<i> ${selectedText} </i>`); setClicked(true);
    }
    else if(isClicked){
      setSelectedText(selectedText.split('<i>').join("").split('</i>').join(" "));setClicked(false)
    }
  };

  
  
  return(
    <div 
    style={
      { 
        // CSS here
        left:posX,
        top:posY
      }
    }
    onMouseLeave={()=>{setMenuShow(false)}}
    className="absolute bg-gray-200 flex flex-col rounded-md">

      <Button onClickEvent={setBold}>
        Bold
      </Button>
      <Button onClickEvent={setItalic}>
        Indent
      </Button>

    </div>
  );
}


const Button = (
  {children,onClickEvent}:
  {
    children:ReactNode,
    onClickEvent: (boolean:boolean,fun:(boolean:boolean)=>void)=>void
  
  }) => {

  const [isClicked,setClicked]=useState(false);

  return(
  <button 
  className="hover:bg-gray-50 px-1 text-center rounded-md text-gray-500 font-thin " 
  onClick={()=>{onClickEvent(isClicked,setClicked)}}>
    <span className={raleway.className}>{children}</span>
  </button>
  )
}

export default Menu;