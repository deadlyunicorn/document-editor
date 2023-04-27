'use client'

import { createContext } from 'react';
import { userInputArray } from '../page';


export const metaContext = createContext<metaInterface>({
  creatorID:"",
  setCreatorID:(creatorID:string)=>{},
  creatorName:"",
  setCreatorName:(creatorName:string)=>{},
  docName:"",
  setDocName:(docName:string)=>{},
  assignedFor:"",
  setAssignedFor:(assignedFor:string)=>{},
  printPrep:false,
  setPrintPrep:(printPrep:boolean)=>{},
  pagesToDisplay:[],
  setPagesToDisplay:(PagesToDisplay:any)=>{},
  characterCount:0,
  setCharacterCount:(num:number)=>{}

});

export interface metaInterface{
  creatorID:string;
  setCreatorID:(creatorID:string)=>void;
  creatorName:string;
  setCreatorName:(creatorName:string)=>void;
  docName:string;
  setDocName:(docName:string)=>void,
  assignedFor:string,
  setAssignedFor:(assignedFor:string)=>void,
  printPrep:boolean,
  setPrintPrep:(printPrep:boolean)=>void,
  pagesToDisplay:userInputArray,
  setPagesToDisplay:(PagesToDisplay:any)=>void,
  characterCount:number,
  setCharacterCount:(num:number)=>void,
}
