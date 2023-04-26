import Menu from "@/app/components/buttons";
import {  ReactNode, useContext, useState } from "react";
import { metaContext } from "../page";
import { userInputArray } from "../page";

const PagesSet=()=>{
  

  ///add a confirm box when deleting pages..
  const {pagesToDisplay ,setPagesToDisplay,printPrep}=useContext(metaContext);


  const handleHeadingChange=(newValue:string,index:number)=>{
    setPagesToDisplay((oldArray)=>{
      const newArray=[...oldArray];
      newArray[index]["input"]=newValue;
      return newArray;
    })



  };


  const [menuIsShown,setMenuShow]=useState(false);
  const [selectedText,setSelectedText]=useState('');
  const [mousePos,setMousePos]=useState<number[]>([]);

  return(
    <div>
      {pagesToDisplay.map(({input,textarea},pageIndex:number)=>(
        <div key={pageIndex}>

        {!printPrep&&pagesToDisplay.length>1
        &&<RemovePageButton pageIndex={pageIndex}/>}

          <div className="A4 data-[print_check] " data-print_check={printPrep}>

            <div className="gap-10 flex flex-col overflow-hidden items-center text-left">
              <input className="h1" placeholder="Page Heading" onChange={(event)=>{handleHeadingChange(event.target.value,pageIndex)}} value={input}/>
              <DocumentInfo/>
              <MainContent 
                setMousePos={setMousePos} 
                setMenuShow={setMenuShow} 
                setPagesToDisplay={setPagesToDisplay} 
                setSelectedText={setSelectedText} 
                pageIndex={pageIndex} 
              />

              {selectedText}
              <br/>
              {pagesToDisplay[pageIndex]["textarea"]}
              
            </div>
            <div>
              <CreatorInfo/>
              {pageIndex+1}
            </div>


          </div>
          {menuIsShown&&
              <Menu 
                posX={mousePos[0]} 
                posY={mousePos[1]} 
                setMenuShow={setMenuShow}
                selectedText={selectedText}
              />
              }
      </div>


      ))}
    </div>
  )
}



const MainContent = ({setMousePos,setMenuShow,setPagesToDisplay,setSelectedText,pageIndex}:{
  setMousePos:([]:number[])=>void,
  setMenuShow:(bool:boolean)=>void,
  setPagesToDisplay:(value:userInputArray) => void
  setSelectedText: (text: string) => void
  pageIndex:number
}) => {


  const handleTextAreaChange=(newValue:ReactNode,index:number)=>{
    setPagesToDisplay(oldArray=>{
      const newArray=[...oldArray];
      newArray[index]["textarea"]=newValue;
      return newArray;
  })  

  };

  const handleRightClick = (event:MouseEvent)=>{
    event.preventDefault();
    setMenuShow(true);
    setMousePos([
      event.clientX+window.scrollX
    ,
      event.clientY+window.scrollY
    ])

  }



  return(
    <div className="div-center-content">
      <div
                contentEditable={true}
                onClick={()=>{setMenuShow(false);}}
                placeholder="hello" 
                className=" w-full h-full" 
                
                //!!! onChange won't do
                onInput={(event)=>{
                    handleTextAreaChange(event.currentTarget.innerHTML,pageIndex)
                }}
                //onSelect={(event)=>{setSelectedText(event.target);alert(event.target.value)}}
                onContextMenu={handleRightClick as any}
                onMouseUp={()=>{window.getSelection()?setSelectedText(window.getSelection()!.toString()):null;}}
                >
                </div>
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

const RemovePageButton=({pageIndex}:{pageIndex:number})=>{


  const {pagesToDisplay ,setPagesToDisplay}=useContext(metaContext);

  const removePage=(key:number)=>{
    const newPagesToDisplay = pagesToDisplay.filter((page,index)=>index!==key);
    setPagesToDisplay([...newPagesToDisplay]); //spread operator needed for some reason
  }

  return(
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
                  
          </button>
  )
}



export default PagesSet;