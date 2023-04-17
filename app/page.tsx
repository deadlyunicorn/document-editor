'use client'

import {  ReactNode, createContext, useContext, useEffect, useState } from "react";

interface metaInterface{
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
  pageCountToDisplay:number[],
  setPagesToDisplay:(PagesToDisplay:number[])=>void,
}

const metaContext = createContext<metaInterface>({
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
  pageCountToDisplay:[],
  setPagesToDisplay:(PagesToDisplay:number[])=>{}
});





export default function Page() {




  const confirmReload = (e:Event) => {
    e.preventDefault(); //works only on firefox as of 16/04
    e.returnValue="yee"; //works on most browsers.
  };

 
  const [pageCountToDisplay,setPagesToDisplay]=useState<number[]>([]);
  
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
    pageCountToDisplay:pageCountToDisplay,
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

const PagesSet=()=>{

  ///add a confirm box when deleting pages..
  const {pageCountToDisplay,setPagesToDisplay,printPrep}=useContext(metaContext);

  

    const removePage=(key:number)=>{
      const newPagesToDisplay = pageCountToDisplay.filter((page,index)=>index!==key);
      setPagesToDisplay([...newPagesToDisplay]); //spread operator needed for some reason
    }
  

    useEffect(()=>{
    },[pageCountToDisplay]);


  return(
    <div>
      {pageCountToDisplay.map((pageNum:number,pageIndex:number)=>(
        <div key={pageIndex}>
        {!printPrep&&pageCountToDisplay.length>1&&

        <button 
          className="absolute"
          onClick={()=>{
            
              removePage(pageIndex)

              //setPagesToDisplay(PagesToDisplay.filter((page,i)=>{alert(i);return i!=index})) 
              //at the beginning I used filter() that removed said the page using its index. Then the rest of the items were getting their indexes removed by 1 so that made it remove the rest, as well.. 
              //this gets the value at the time of pressing the button, not when it was rendered.
              //index above reaches until the page you want to remove then stops 
              //find a way to get the div key of the div of the component. Maybe with document.querySelector()->pageNum?
              }}>
                Remove Page {pageIndex+1}
                
        </button>}
        <PageComponent pageNum={pageIndex+1}/>
      </div>
      ))}
    </div>
  )
}


const sourceRef=(link:string, number:number)=>(
  <sup>
    <a href={link} target="_blank">
      [{number}]
    </a> 
  </sup>
)


const PageComponent = (
  {pageNum}:{pageNum:number}
) => {

  const {printPrep}=useContext(metaContext);

  return(

  <div className="A4 data-[print_check]" data-print_check={printPrep}>

    <div className="gap-10 flex flex-col">
      <input className="h1" placeholder="Page Heading"/>
      <DocumentInfo/>
      <MainContent>
        <textarea placeholder="hello" className=" w-full"/>
      </MainContent>
    </div>

    <div>
      <CreatorInfo/>
      {pageNum}
    </div>

  </div>
  );
}

 

  const MainContent = ({children}:{children:ReactNode}) => {
    return(
      <div className="div-center-content">
        {children}
      </div>
    );
  }


  const DocumentInfo=()=>{
  
    const {assignedFor,setAssignedFor,docName,setDocName}=useContext(metaContext);
  
    return(
      <div className="flex justify-around gap-x-7">
  
        <input placeholder="Made For" onChange={(event)=>setAssignedFor(event.target.value)} value={assignedFor}>
        </input>
  
        <input className="text-right" placeholder="Document Name" onChange={(event)=>setDocName(event.target.value)} value={docName}>
        </input>
  
      </div>
    )
  }
  



  const CreatorInfo=()=>{

    const {creatorName,setCreatorName,creatorID,setCreatorID}=useContext(metaContext);

    

    
    return(
      <div className="flex justify-around gap-x-7">
        <input placeholder="Creator Name" onChange={(event)=>setCreatorName(event.target.value)} value={creatorName}>
          </input>
        <input className="text-right" placeholder="Creator id" onChange={(event)=>setCreatorID(event.target.value)} value={creatorID}>
        </input>
      </div>
    )
  }

  const OptionMenu=()=>{
    const {printPrep,setPrintPrep}=useContext(metaContext);

    const {pageCountToDisplay,setPagesToDisplay}=useContext(metaContext);

    
    return(
      <div className="h-fit grid-cols-2 grid A4 text-blue-500 data-[print_check]" data-print_check={printPrep}>
        <label>
          Print Show
          <input id="print" type="checkbox" onChange={()=>{setPrintPrep(!printPrep);}}/>
        </label>

        <button  onClick={()=>{
              pageCountToDisplay.length<12&&
              setPagesToDisplay([...pageCountToDisplay,pageCountToDisplay.length+1])
            }}>
          Add Page
        </button>
      

      </div>

    )
  }
  
  const sampleText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";