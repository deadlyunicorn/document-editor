import { ReactNode, useState } from "react";
import {Raleway} from "next/font/google";

const raleway = Raleway({subsets:['latin'],weight:"400"});

const Menu = (
  {posX,posY,setMenuShow,selectedText}:
  {posX:number,posY:number,
  setMenuShow:(x:boolean)=>void,
  selectedText:string
    }) => {

  const setBold = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    if(isClicked==0){
      document.execCommand("bold",false)
      setClicked(1);
    }
    else if(isClicked==1){
      document.execCommand("bold",false)

      setClicked(0)
    }

  };

  const setCenter = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    if(isClicked==0){
      document.execCommand("insertHTML",false,`<center>${selectedText}</center><br/>`)
      setClicked(1);
    }
    else if(isClicked==1){
      document.execCommand("undo",false)
      setClicked(2)
    }
    else if(isClicked==2){
      document.execCommand("redo",false)
      setClicked(1)
    }
  };

  const setItalic = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    if(isClicked==0){
      setClicked(1);
      document.execCommand("insertHTML",false,`<em>${selectedText}</em>`)
    }
    else if(isClicked==1){
      setClicked(2)
      document.execCommand("undo",false)
    }
    else if(isClicked==2){
      document.execCommand("redo",false)
      setClicked(1)
    }
    
    }
  const setIndent = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    if(isClicked==0){
      setClicked(isClicked+1);
      document.execCommand("indent",false)
    }
    else if(isClicked==1){
      setClicked(2);
      document.execCommand("undo",false);}

    else if(isClicked==2){
      document.execCommand("redo",false)
      setClicked(1)
    }
    
    };

  const setOList = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    if(isClicked==0){
      document.execCommand("insertOrderedList",false)
      setClicked(1);
    }
    else if(isClicked==1){
      document.execCommand("undo",false);
      setClicked(2)
    }
    else if(isClicked==2){
      document.execCommand("redo",false)
      setClicked(1)
    };
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
        Italic
      </Button>
      <Button onClickEvent={setIndent}>
        Indent
      </Button>
      <Button onClickEvent={setCenter}>
        Center
      </Button>

    </div>
  );
}


const Button = (
  {children,onClickEvent}:
  {
    children:ReactNode,
    onClickEvent: (boolean:number,fun:(boolean:number)=>void)=>void
  
  }) => {

  const [isClicked,setClicked]=useState(0);

  return(
  <button 
  className="hover:bg-gray-50 px-1 text-center rounded-md text-gray-500 font-thin " 
  onClick={()=>{onClickEvent(isClicked,setClicked)}}>
    <span className={raleway.className}>{children}</span>
  </button>
  )
}

export default Menu;