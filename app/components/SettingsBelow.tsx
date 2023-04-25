import { useContext } from "react";
import { metaContext } from "../page"

const OptionMenu=()=>{
  const {printPrep,setPrintPrep}=useContext(metaContext);

  const {pagesToDisplay: pagesToDisplay,setPagesToDisplay}=useContext(metaContext);

  
  return(
    <div className="h-fit grid-cols-2 grid A4 text-blue-500 data-[print_check]" data-print_check={printPrep}>
      <label>
        Print Show
        <input id="print" type="checkbox" onChange={()=>{setPrintPrep(!printPrep);}}/>
      </label>

      <button  onClick={()=>{
            pagesToDisplay.length<12&&
            setPagesToDisplay([...pagesToDisplay,{input:"",textarea:""}])
          }}>
        Add Page
      </button>
    

    </div>

  )
}

export default OptionMenu;