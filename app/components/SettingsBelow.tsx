'use client'

import { useContext, useState } from "react";

import { metaContext } from "./metaContext";
import { colorContext } from "./colorContext";

import { customFonts } from "./customFonts";

const OptionMenu=()=>{
  const {printPrep,setPrintPrep}=useContext(metaContext);

  const {
    setBg1,setBg2,
    bg1,bg2,
    textColor,setTextColor,
    headingColor,setHeadingColor,
    headingColor2,setHeadingColor2,
    pageBg,setPageBg,
    setTextFont,setHeadingFont
  }=useContext(colorContext);

  const {pagesToDisplay: pagesToDisplay,setPagesToDisplay}=useContext(metaContext);

  
  const [palette,setPalette]=useState("#000000");

  const fontList=Object.keys(customFonts);


  return(
    <div className="
      h-fit py-2 A4 
      flex flex-row justify-center 
      text-blue-500 data-[print_check]
      overflow-visible" 
      data-print_check={printPrep}>
      
      <div className="flex flex-col items-start w-48">

        <button  onClick={()=>{
              pagesToDisplay.length<12&&
              setPagesToDisplay([...pagesToDisplay,{input:"",textarea:""}])
            }}>
          Add Page
        </button>

        <label>
          Print Show
          <input  id="print" type="checkbox" onChange={()=>{setPrintPrep(!printPrep);}}/>
        </label>

        
        <div>

          <div className="w-fit flex">
            <div className="tooltip">
              <label>Palette </label>
              <span className="tooltip-text">
                You can use this tool <br/>
                to get the hex value <br/>
                of a color and use it <br/> 
                to change the colors <br/>
                based on your needs. <br/>
              </span>
            </div>
            <span style={{color:palette}}>&nbsp;{palette}</span>
            <input id="palette" type="color" value={palette} onChange={(event)=>{setPalette(event.target.value)}}/>
          </div>
          
          
        </div>
        
      </div>

      <div className="flex flex-col items-start w-48">
        <label className="w-fit flex" htmlFor="bg1">

          Doc Background
          <input id="bg1" type="color" value={bg1} onChange={(event)=>{setBg1(event.target.value)}} />
          <input id="bg2" type="color" value={bg2} onChange={(event)=>{setBg2(event.target.value)}} />
        </label>
        <label className="w-fit flex">
          Text Color
          <input id="color" type="color" value={textColor} onChange={(event)=>{setTextColor(event.target.value)}}/>
        </label>
        <label className="w-fit flex">
          Heading Color
          <input id="hColor" type="color" value={headingColor} onChange={(event)=>{setHeadingColor(event.target.value)}} />
          <input id="hShadow" type="color" value={headingColor2} onChange={(event)=>{setHeadingColor2(event.target.value)}} />
        </label>
      </div>

      <div className="flex flex-col items-start w-48">
        <div className="flex">
          Page Background
          <input id="pageBg" type="color" value={pageBg} onChange={(event)=>{ setPageBg(event.target.value)}}/>

        </div>
        <div className="flex">
          <label htmlFor="headingFontInput" className="whitespace-nowrap">Heading Font:&nbsp;</label>
          <input
            onChange={(e=>{if(fontList.includes(e.target.value)){(setHeadingFont(e.target.value))}})}
            list="headingFont" 
            id="headingFontInput" 
            className="w-40" 
            placeholder="Heading Font"/>
          <datalist id="headingFont">
            {
            fontList.map((fontName,index)=>(
              <option key={index} value={fontName}>
                {fontName}
              </option>
            ))
            }
          </datalist>
        </div>
        <div className="flex">
          <label htmlFor="textFontInput" className="whitespace-nowrap">Text Font:&nbsp;</label>
          <input 
            onChange={(e=>{if(fontList.includes(e.target.value)){(setTextFont(e.target.value))}})}

            list="textFont" 
            id="textFontInput" 
            className="w-40" 
            placeholder="Text Font"/>
          <datalist id="textFont">
          {
            fontList.map((fontName,index)=>(
              <option key={index} value={fontName}>
                {fontName}
              </option>
            ))
            }
          </datalist>
        </div>
        
      </div>

      
    

    </div>

  )
}

export default OptionMenu;