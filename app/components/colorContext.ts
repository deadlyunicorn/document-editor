'use client'

import { createContext } from "react";

export interface colorInterface{
  bg1:string,
  setBg1:(color:string)=>void,
  bg2:string,
  setBg2:(color:string)=>void,
  textColor:string,
  setTextColor:(color:string)=>void,
  headingColor:string,
  setHeadingColor:(color:string)=>void,
  headingColor2:string,
  setHeadingColor2:(color:string)=>void,
  pageBg:string,
  setPageBg:(color:string)=>void,
};

export const colorContext = createContext<colorInterface>({
  bg1:"#00000",
  setBg1:(color:string)=>{},
  bg2:"#00000",
  setBg2:(color:string)=>{},
  textColor:"#00000",
  setTextColor:(color:string)=>{},
  headingColor:"#00000",
  setHeadingColor:(color:string)=>{},
  headingColor2:"#00000",
  setHeadingColor2:(color:string)=>{},
  pageBg:"#00000",
  setPageBg:(color:string)=>{},
});
