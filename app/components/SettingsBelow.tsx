import { useContext, useState } from "react";

import { metaContext } from "./metaContext";
import { colorContext } from "./colorContext";

const OptionMenu=()=>{
  const {printPrep,setPrintPrep}=useContext(metaContext);

  const {
    setBg1,setBg2,
    bg1,bg2,
    textColor,setTextColor,
    headingColor,setHeadingColor,
    headingColor2,setHeadingColor2,
    pageBg,setPageBg
  }=useContext(colorContext);

  const {pagesToDisplay: pagesToDisplay,setPagesToDisplay}=useContext(metaContext);

  
  const [pallete,setPallete]=useState("#00000");


  return(
    <div className="
      h-fit py-2 A4 
      flex flex-row justify-center 
      text-blue-500 data-[print_check]" 
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
          <label className="w-fit">
            Pallete 
            <input id="pallete" type="color" value={pallete} onChange={(event)=>{setPallete(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>
          </label>
          <span style={{color:pallete}}>{pallete}</span>
        </div>
        
      </div>

      <div className="flex flex-col items-start w-48">
        <div>
          Doc Background
          <input id="bg1" type="color" value={bg1} onChange={(event)=>{setBg1(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>
          <input id="bg2" type="color" value={bg2} onChange={(event)=>{setBg2(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>

        </div>
        <label className="w-fit">
          Text Color
          <input id="color" type="color" value={textColor} onChange={(event)=>{setTextColor(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>
        </label>
        <label className="w-fit">
          Heading Color
          <input id="hColor" type="color" value={headingColor} onChange={(event)=>{setHeadingColor(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>
          <input id="hShadow" type="color" value={headingColor2} onChange={(event)=>{setHeadingColor2(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>
        </label>
      </div>
      <div className="flex flex-col items-start w-48">
        <div>
          Page Background
          <input id="pageBg" type="color" value={pageBg} onChange={(event)=>{setPageBg(event.target.value)}} className="w-6 translate-y-1 translate-x-1"/>

        </div>
        <label className="w-fit">
          Text Font
        </label>
        <label className="w-fit">
          Heading Font
        </label>
      </div>

      
    

    </div>

  )
}

export default OptionMenu;