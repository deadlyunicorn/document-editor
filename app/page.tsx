'use client'

import React, {  ReactNode, createContext , useEffect, useState } from "react";
import PagesSet from "@/app/components/A4pages";
import OptionMenu from "@/app/components/SettingsBelow";


interface userInput{
  input:string;
  textarea:ReactNode
}

type userInputArray= userInput[];

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
  setPagesToDisplay:(PagesToDisplay:userInputArray)=>void,
}

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
  setPagesToDisplay:(PagesToDisplay:userInputArray)=>{}
});

export default function Page() {

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
  
  const value = {
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
  };

 




  return (

    <main className="data-[color_default=true]:bg-[#ffe4c4]" data-color_default={printPrep}>
      <metaContext.Provider value={value}>
        <PagesSet/>
        <OptionMenu/>
      </metaContext.Provider>
    </main>
  )
}

const sourceRef=(link:string, number:number)=>(
  <sup>
    <a href={link} target="_blank">
      [{number}]
    </a> 
  </sup>
)

const sampleText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";