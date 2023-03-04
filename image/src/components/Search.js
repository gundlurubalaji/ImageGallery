import React from "react";
import"./menu.css"
import { CategoryContext } from './Context'
const Search =() => {
    const { image,query } = React.useContext(CategoryContext); 
    const [search,setSearch]=query
  
 
return(
    <>
     <div className="input-group">
    <div className="form-outline">
    <input id="search-Term" type="search" className="form-control" />
    
  </div>
  <button type="button" className="btn-search"  onClick={()=>{setSearch(document.getElementById("search-Term").value)}}      >
   {/* <i className="fas fa-search"></i> */}
   Search
  </button>
        </div>
    </>
)
}
export default Search
