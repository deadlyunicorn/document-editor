'use client'
import { ReactNode, useEffect, useState } from "react";
import {Raleway} from "next/font/google";
import { getComplamentHex } from "../lib/getComplementHex";

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

  const [color1,setColor1]=useState("#000000");
  const [color2,setColor2]=useState("#000000");
  const [color3,setColor3]=useState("#000000");
  const [bgColor,setBgColor]=useState("#000000");
  const [fontSize,setFontSize]=useState(12);

  useEffect( ()=> {
    setColor1(localStorage.color1||"#000000");
    setColor2(localStorage.color2||"#000000");
    setColor3(localStorage.color3||"#000000");
    setBgColor(localStorage.bgColor||"#000000");
    setFontSize(localStorage.fontSize || 12 );
  },[])

  useEffect(()=>{
      localStorage.color1=color1;
  },[color1])
  useEffect(()=>{
    localStorage.color2=color2;
  },[color2])
  useEffect(()=>{
    localStorage.color3=color3;
  },[color3])
  useEffect(()=>{
    localStorage.bgColor=bgColor;
  },[bgColor])
  useEffect(()=>{
    localStorage.fontSize=fontSize;
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

    <div className="grid grid-cols-4 w-[400px] font-sans">

      <Button onClickEvent={()=>{document.execCommand("bold")}}>
        <b>B</b>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("italic")}}>
        <i className="font-mono">I</i>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("underline")}}>
        <u>U</u>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("strikeThrough")}}>
        <s>S</s>
      </Button>

      <Button onClickEvent={()=>{document.execCommand("indent")}}>
        &gt;&gt;
      </Button>
      <Button onClickEvent={()=>{document.execCommand("outdent")}}>
        &lt;&lt;
      </Button>
      <Button onClickEvent={()=>{document.execCommand("insertUnorderedList")}}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="h-2 w-2 bg-black rounded-full"></div>
        </div>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("insertOrderedList")}}>
      <div className="w-full h-full flex justify-center items-center">
          <div className="h-2 w-2 rounded-full border border-black"></div>
        </div>
      </Button>

      
      <Button onClickEvent={()=>{document.execCommand("justifyLeft")}}>
        Left
      </Button>
      <Button onClickEvent={setCenter}>
        Center
      </Button>
      <Button onClickEvent={()=>{document.execCommand("justifyRight")}}>
        Right
      </Button>
      <Button onClickEvent={()=>{
          document.execCommand("fontSize",false, `3px`)}}>
            Size:&nbsp;<span className="text-xs">Sm</span>
      </Button>
      

      <Button onClickEvent={()=>{document.execCommand("superscript")}}>
        a<sup>x</sup>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("subscript")}}>
        a<sub>x</sub>
      </Button>
      <Button onClickEvent={()=>{document.execCommand("removeFormat")}}>
        Clear
      </Button>
      <Button onClickEvent={()=>{
          document.execCommand("fontSize",false, `6px`)}}>
            Size:&nbsp;<span className="text-base">Md</span>
      </Button>
     
      
      <Button onClickEvent={()=>{document.execCommand("insertParagraph")}}>
        Paragraph
      </Button>
      <Button onClickEvent={()=>{document.execCommand("unlink")}}>
        <s>URL</s>
      </Button>
      <Button onClickEvent={()=>{
        const link=prompt("Enter Link:");
        document.execCommand("createLink",false,link||"www.google.com")}}>
        URL
      </Button>
      <Button onClickEvent={()=>{
          document.execCommand("fontSize",false, `12px`)}}>
            Size:&nbsp;<span className="text-xl">Lg</span>
      </Button>

      
    </div>
    
 

    <div className="flex flex-col">

      
      
          
      <div className="flex items-center justify-center">
        
          


      </div>
      
      
    </div>

    <div className="grid grid-rows-3">

      <ColorPalleteSelection
        colorValue={color1}
        setColor={setColor1}/>
      <ColorPalleteSelection
        colorValue={color2}
        setColor={setColor2}/>
      <ColorPalleteSelection
        colorValue={color3}
        setColor={setColor3}/>
      <input 
          type="color"
          value={bgColor}
          onChange={( e )=>{
            setBgColor( e.target.value || "black ");
          }}/>
    </div>

  <div className="grid">

       
    <Button onClickEvent={()=>{
          document.execCommand("foreColor",false,color1)}}>
            <span style={{color:color1}} >
              Set
            </span>
    </Button>
    <Button onClickEvent={()=>{
          document.execCommand("foreColor",false,color2)}}>
            <span style={{color:color2}} >
              Set
            </span>
    </Button>
    <Button onClickEvent={()=>{
          document.execCommand("foreColor",false,color3)}}>
            <span style={{color:color3}} >
              Set
            </span>
    </Button>
    <Button onClickEvent={()=>{
      document.execCommand("hiliteColor",false,bgColor)}}>
        <span style={{ 
          backgroundColor: bgColor,
          color: getComplamentHex(bgColor)
        }}>SET</span>
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
  className="hover:bg-gray-50 px-1 text-center rounded-md text-gray-500 font-thin" 
  onClick={()=>{onClickEvent(isClicked,setClicked)}}>
    <span className={raleway.className}>{children}</span>
  </button>
  )
}

export default Menu;

const ColorPalleteSelection = ( { setColor, colorValue } : { setColor : ( color: string ) => void, colorValue: string } ) => (
  <input 
    value={ colorValue }
    className="place-self-center"
    type="color" 
    onChange={ (event) => {
      setColor(  String(event.target.value) ||"black") }}
    />

)