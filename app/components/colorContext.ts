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
  textFont:string,
  setTextFont:(color:string)=>void,
  headingFont:string,
  setHeadingFont:(font:string)=>void,
};

export const colorContext = createContext<colorInterface>({
  bg1:"#faebd7",
  setBg1:(color:string)=>{},
  bg2:"#ffe4c4",
  setBg2:(color:string)=>{},
  textColor:"#b22222",
  setTextColor:(color:string)=>{},
  headingColor:"#1bbd1b",
  setHeadingColor:(color:string)=>{},
  headingColor2:"#5dec5d",
  setHeadingColor2:(color:string)=>{},
  pageBg:"#acd3ac",
  setPageBg:(color:string)=>{},
  textFont:"hi",
  setTextFont:(font:string)=>{},
  headingFont:"roboto",
  setHeadingFont:(font:string)=>{},
});
