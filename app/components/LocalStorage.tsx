'use client'

import { useState, useEffect, ReactNode } from "react";

import PagesSet from "@/app/components/A4pages";
import OptionMenu from "@/app/components/SettingsBelow";
import Alert from "@/app/components/Alert";

import { metaContext} from "@/app/components/metaContext";
import { colorContext } from "@/app/components/colorContext";







const LocalStorageComponent = () => {

  const confirmReload = (e:Event) => {
    e.preventDefault(); //works only on firefox as of 16/04
    e.returnValue=true; //works on most browsers.
  };


 
  const [pagesToDisplay,setPagesToDisplay]=useState<userInputArray>([{input:"",textarea:""}]);
  
  const [docName,setDocName]=useState<string>("");
  const [assignedFor,setAssignedFor]=useState<string>("");

  const [creatorName,setCreatorName]=useState<string>("");
  const [creatorID,setCreatorID]=useState<string>("");


  const [printPrep,setPrintPrep]=useState<boolean>(false);

  useEffect(()=>{
    window.addEventListener('beforeunload',confirmReload);
    return()=>{
      window.removeEventListener('beforeunload',confirmReload);
    };
  },[]);
  
  const [characterCount,setCharacterCount]=useState(0);


  const metaValue = {
    creatorID:creatorID,
    setCreatorID:setCreatorID,
    creatorName:creatorName,
    setCreatorName:setCreatorName,
    docName:docName,
    setDocName:setDocName,
    assignedFor:assignedFor,
    setAssignedFor:setAssignedFor,
    printPrep:printPrep,
    setPrintPrep:setPrintPrep,
    pagesToDisplay:pagesToDisplay,
    setPagesToDisplay:setPagesToDisplay,
    characterCount:characterCount,
    setCharacterCount:setCharacterCount
  };



  const [bg1,setBg1]=useState(localStorage.getItem("bg1")||"antiquewhite")
  const [bg2,setBg2]=useState(localStorage.getItem("bg2")||"#ffe4c4")
  const [textColor,setTextColor]=useState(localStorage.getItem("textColor")||"firebrick");
  const [headingColor,setHeadingColor]=useState(localStorage.getItem("headingColor")||"#1bbd1b");
  const [headingColor2,setHeadingColor2]=useState(localStorage.getItem("headingColor2")||"#5dec5d");
  const [pageBg,setPageBg]=useState(localStorage.getItem("pageBg")||"#acd3ac")

  const [textFont,setTextFont]=useState(localStorage.getItem("textFont")||"Roboto")
  const [headingFont,setHeadingFont]=useState(localStorage.getItem("headingFont")||"Roboto")


  const colorValue ={
    bg1:bg1,
    setBg1:setBg1,
    bg2:bg2,
    setBg2:setBg2,
    textColor:textColor,
    setTextColor:setTextColor,
    headingColor:headingColor,
    setHeadingColor:setHeadingColor,
    headingColor2:headingColor2,
    setHeadingColor2:setHeadingColor2,
    pageBg:pageBg,
    setPageBg:setPageBg,
    textFont:textFont,
    setTextFont:setTextFont,
    headingFont:headingFont,
    setHeadingFont:setHeadingFont,
  }


  useEffect(()=>{
      localStorage.setItem("bg1",bg1);
  },[bg1])
  useEffect(()=>{
    localStorage.setItem("bg2",bg2);
  },[bg2])
  useEffect(()=>{
    localStorage.setItem("textColor",textColor);
  },[textColor])
  useEffect(()=>{
    localStorage.setItem("headingColor",headingColor);
  },[headingColor])
  useEffect(()=>{
    localStorage.setItem("headingColor2",headingColor2);
  },[headingColor2])
  useEffect(()=>{
    localStorage.setItem("pageBg",pageBg);
  },[pageBg])



  return (

    <section
      style={{backgroundColor:pageBg}}
      className="data-[color_default=true]:bg-[#ffe4c4]" data-color_default={printPrep}> 

      <metaContext.Provider value={metaValue}>
        <colorContext.Provider value={colorValue}>
          
              {(characterCount)>1500&&!printPrep&&
          <Alert/>}

          <PagesSet/>
          <OptionMenu/>
        </colorContext.Provider>
      </metaContext.Provider> 


    </section>
  )

}


interface userInput{
  input:string;
  textarea:ReactNode
}

export type userInputArray = userInput[];


export default LocalStorageComponent;