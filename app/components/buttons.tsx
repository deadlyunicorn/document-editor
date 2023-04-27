import { ReactNode, useEffect, useState } from "react";
import {Raleway} from "next/font/google";

const raleway = Raleway({subsets:['latin'],weight:"400"});

const Menu = (
  {posX,posY,setMenuShow,selectedText}:
  {posX:number,posY:number,
  setMenuShow:(x:boolean)=>void,
  selectedText:string
    }) => {


  const setCenter = (isClicked:number,setClicked:(boolean:number)=>void) =>{
      document.execCommand("insertHTML",false,`<center>${selectedText}</center><br/>`)
 
  };

 

  const setOList = (isClicked:number,setClicked:(boolean:number)=>void) =>{
    document.execCommand("insertHTML",false,`<ol><li>${selectedText}</li></ol><br/>`)
    }

  const [color1,setColor1]=useState(localStorage.getItem("color1")||"");
  const [color2,setColor2]=useState(localStorage.getItem("color2")||"");
  const [color3,setColor3]=useState(localStorage.getItem("color3")||"");
  const [bgColor,setBgColor]=useState(localStorage.getItem("bgColor")||"");
  const [fontSize,setFontSize]=useState(localStorage.getItem("fontSize")||"");

  useEffect(()=>{
      localStorage.setItem("color1",color1);
  },[color1])
  useEffect(()=>{
    localStorage.setItem("color2",color2);
  },[color2])
  useEffect(()=>{
    localStorage.setItem("color3",color3);
  },[color3])
  useEffect(()=>{
    localStorage.setItem("bgColor",bgColor);
  },[bgColor])
  useEffect(()=>{
    localStorage.setItem("fontSize",fontSize);
  },[fontSize])


  
  
  return(
    <div 
    style={
      { 
        // CSS here
        left:posX,
        top:posY
      }
    }
    className="absolute bg-gray-200 flex rounded-md">

    <div className="flex flex-col">

      <Button onClickEvent={()=>{document.execCommand("bold")}}>
        Bold
      </Button>
      <Button onClickEvent={()=>{document.execCommand("italic")}}>
        Italic
      </Button>
      <Button onClickEvent={()=>{document.execCommand("underline")}}>
        Underline
      </Button>
      <Button onClickEvent={()=>{document.execCommand("strikeThrough")}}>
        Strike
      </Button>
    </div>
    
    <div className="flex flex-col">

      <Button onClickEvent={()=>{document.execCommand("indent")}}>
        Indent
      </Button>
      <Button onClickEvent={()=>{document.execCommand("outdent")}}>
        Outdent
      </Button>
      <Button onClickEvent={()=>{document.execCommand("justifyLeft")}}>
        Left
      </Button>
      <Button onClickEvent={setCenter}>
        Center
      </Button>
      
    </div>

    <div className="flex flex-col">

      <Button onClickEvent={()=>{document.execCommand("insertUnorderedList")}}>
        Flist
      </Button>
      <Button onClickEvent={()=>{document.execCommand("insertOrderedList")}}>
        Elist
      </Button>
      <Button onClickEvent={()=>{document.execCommand("insertParagraph")}}>
        Paragraph
      </Button>
    </div>

    <div className="flex flex-col">

      <Button onClickEvent={()=>{document.execCommand("superscript")}}>
        Sup
      </Button>
      <Button onClickEvent={()=>{document.execCommand("subscript")}}>
        Sub
      </Button>
      <Button onClickEvent={()=>{document.execCommand("removeFormat")}}>
        Clean
      </Button>
    </div>

    <div className="flex flex-col">

      
      <Button onClickEvent={()=>{
        const link=prompt("Enter Link:");
        document.execCommand("createLink",false,link||"www.google.com")}}>
        Link
      </Button>
      <Button onClickEvent={()=>{document.execCommand("unlink")}}>
        Unlink
      </Button>
      <Button onClickEvent={()=>{document.execCommand("undo")}}>
        Undo
      </Button>
    </div>

    <div className="flex flex-col">

      
      <Button onClickEvent={()=>{
        const size=prompt("Enter Size:");
        setFontSize(size||"11px")}}>
          Size
      </Button>
      <Button onClickEvent={()=>{
        document.execCommand("fontSize",false,fontSize)}}>
          {fontSize+"px"}
      </Button>
      <Button onClickEvent={()=>{
        const color=prompt("Enter color:");
        setBgColor(color||"black")}}>
          setBgCol
      </Button>
      <Button onClickEvent={()=>{
        document.execCommand("hiliteColor",false,bgColor)}}>
        <span style={{color:bgColor}}>bgColor</span>
      </Button>
    </div>

    <div className="flex flex-col">

      
      <Button onClickEvent={()=>{
            const color=prompt("Enter color:");
            setColor1(color||"black")}}>
              setColor1
      </Button>
      <Button onClickEvent={()=>{
            const color=prompt("Enter color:");
            setColor2(color||"black")}}>
              setColor2
      </Button>
      <Button onClickEvent={()=>{
            const color=prompt("Enter color:");
            setColor3(color||"black")}}>
              setColor3
      </Button>
    </div>

  <div className="flex flex-col">

       
  <Button onClickEvent={()=>{
        document.execCommand("foreColor",false,color1)}}>
          <span style={{color:color1}} >
            Color1
          </span>
  </Button>
  <Button onClickEvent={()=>{
        document.execCommand("foreColor",false,color2)}}>
          <span style={{color:color2}} >
            Color2
          </span>
  </Button>
  <Button onClickEvent={()=>{
        document.execCommand("foreColor",false,color3)}}>
          <span style={{color:color3}} >
            Color3
          </span>
  </Button>
  </div>
   


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