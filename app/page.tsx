'use client'

import {  ReactNode, createContext, useContext, useEffect, useState } from "react";



const metaContext = createContext({
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
  pageCount:1,
  setPageCount:(oageCount:number)=>{}

});

export default function Page() {



  const confirmReload = (e:Event) => {
    e.preventDefault(); //works only on firefox as of 16/04
    e.returnValue="yee"; //works on most browsers.
  };

  useEffect(()=>{
    window.addEventListener('beforeunload',confirmReload);
    return()=>{
      window.removeEventListener('beforeunload',confirmReload);
    };
  },[]);
  
  const [docName,setDocName]=useState<string>("");
  const [assignedFor,setAssignedFor]=useState<string>("");

  const [creatorName,setCreatorName]=useState<string>("");
  const [creatorID,setCreatorID]=useState<string>("");

  const [pageCount,setPageCount] = useState(1);

  const [printPrep,setPrintPrep]=useState<boolean>(false);

  
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
    pageCount:pageCount,
    setPageCount:setPageCount
  };




  return (
    
  

    <main className="data-[colorDefault=true]:bg-[#ffe4c4]" data-colorDefault={printPrep}>
      <metaContext.Provider value={value}>
        <PagesSet/>
        <OptionMenu/>
      </metaContext.Provider>
    </main>
    

  )
}

const PagesSet=()=>{

  ///add a confirm box when deleting pages..
  const PagesToDisplay:ReactNode[] = [];
  const {setPageCount,pageCount,printPrep}=useContext(metaContext);
  



  for(let i=0;i<pageCount;i++){
    PagesToDisplay.push(
      <div key={i}>
        {!printPrep&&pageCount>1&&<button className="absolute" onClick={()=>{PagesToDisplay.splice(i,1);setPageCount(pageCount-1)}}>Remove Page</button>}
        <PageComponent pageNum={i+1}/>
      </div>
    )
  }

  return(
    <div>
      {PagesToDisplay}
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

  <div className="A4 data-[printCheck]" data-printCheck={printPrep}>

    <input className="h1" placeholder="Page Heading">
    </input>
    <DocumentInfo/>
 
      <MainContent>
        {sampleText}
      </MainContent>

    <CreatorInfo/>
    {pageNum}
  </div>
  );
}

  {/* <h1>Θέμα Β</h1>
  <div class="display: flex; justify-content: space-around; width: 100%;">
    <div>
      Βάσεις Δεδομένων Θεωρία
    </div>
    <div>
      Εργασία B' Εξαμήνου
    </div>
  </div>
  <div class="div-center-content">
    
    <h2 class="text-align: center;"><u>Δημιουργία πίνακα με DDL</u></h2>
    <p class="border-bottom: solid black 1px; padding-bottom: 5px;">
      <br/>
      <i class="italicColor">CREATE TABLE</i> ΣΧΟΛΕΙΟ(
        <br/>ΚΩΔΙΚΟΣ <i class="italicColor">VARCHAR(6)</i> <b><span class="color: blueviolet;">PRIMARY KEY</span></b>,
        <br/>ΟΝΟΜΑ <i class="italicColor">VARCHAR(25)</i>,
        <br/>ΔΙΕΥΘΥΝΣΗ <i class="italicColor">VARCHAR(40)</i>,
        <br/>ΑΡ_ΜΑΘΗΤΩΝ <i class="italicColor">INT</i>
        <br/>);
    </p>
    
    <br/>
    <h2 class="text-align: center;"><u>Εισαγωγή τιμών με DML</u></h2>
    <div class="display: grid; grid-template-columns:repeat(2,1fr); gap: 40px;"> 

      <p class="border-bottom: solid black 1px; padding-bottom: 5px;">
        <br/>
        <i class="italicColor">INSERT INTO</i> ΣΧΟΛΕΙΟ <i class="italicColor">VALUES</i>(
          <br/><span class="seaGreen">'0Α1420'</span>,
          <br/><span class="seaGreen">'9ο ΓΕ.Λ. ΑΘΗΝΩΝ'</span>,
          <br/><span class="seaGreen">'ΑΘΗΝΑ'</span>,
          <br/><i class="italicColor">245</i>
        <br/>);
      </p>
    

      <p class="border-bottom: solid black 1px; padding-bottom: 5px;">
      <br/>
      <i class="italicColor">INSERT INTO</i> ΣΧΟΛΕΙΟ <i class="italicColor">VALUES</i>(
        <br/><span class="seaGreen">'0Σ0420'</span>,
        <br/><span class="seaGreen">'2ο ΓΕ.Λ. ΠΕΙΡΑΙΑ'</span>,
        <br/><span class="seaGreen">'ΠΕΙΡΑΙΑΣ'</span>,
        <br/><i class="italicColor">311</i> 
      <br/>);
      </p>

      <p class="border-bottom: solid black 1px; padding-bottom: 5px;">
        <i class="italicColor">INSERT INTO</i> ΣΧΟΛΕΙΟ <i class="italicColor">VALUES</i>(
          <br/><span class="seaGreen">'0Β0111'</span>,
          <br/><span class="seaGreen">'2ο ΕΠΑ.Λ. ΑΘΗΝΑΣ'</span>,
          <br/><span class="seaGreen">'ΑΘΗΝΑ'</span>,
          <br/><i class="italicColor">186</i> 
        <br/>);
      </p>

      <p class="border-bottom: solid black 1px; padding-bottom: 5px;">
        <i class="italicColor">INSERT INTO</i> ΣΧΟΛΕΙΟ <i class="italicColor">VALUES</i>(
          <br/><span class="seaGreen">'0ΒΙ020'</span>,
          <br/><span class="seaGreen">'1ο ΓΕ.Λ. ΚΟΜΟΤΗΝΗΣ'</span>,
          <br/><span class="seaGreen">'ΚΟΜΟΤΗΝΗ'</span>,
          <br/><i class="italicColor">112</i> 
        <br/>);
      </p>
    </div>
    
  </div>
  <div class="display: flex; justify-content: space-around; width: 100%;">
    <div>
      Αλέξανδρος Πετράκε
    </div>
    <div>
      tep8677
    </div>
  </div> */}


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
    const {setPageCount,pageCount}=useContext(metaContext);

    
    return(
      <form className="h-fit grid-cols-2 grid A4 text-blue-500 data-[printCheck]" data-printCheck={printPrep}>
        <label>
          Print Show
          <input id="print" type="checkbox" onChange={()=>{setPrintPrep(!printPrep);}}/>
        </label>

        <label>
          Pages to Display
          <input id="pageCount" type="number" value={pageCount} onChange={(event)=>{
            const pageCount=+event.target.value;
            if(pageCount<=12&&pageCount>0){
              setPageCount(pageCount);}
            else if(pageCount>12){setPageCount(12)}
            }} min={1} max={12}/>
        </label>
        
        {printPrep+""}
        <span>h</span>
        <span>h</span>
        <span>h</span>
        <span>h</span>
        <span>h</span>

      </form>

    )
  }
  
  const sampleText="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";