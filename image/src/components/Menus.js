import React from "react";
import"./menu.css"
import { CategoryContext } from "./Context";
import {
    BrowserRouter as Router,
    Route, 
    Link,
    Routes, 
  } from "react-router-dom";
import App from "../App";
const Menus = () => {
  const { image,query } = React.useContext(CategoryContext); 
  const [search,setSearch]=query
  const [imgs, setImgs]=image
 return(<>
  <div className="menu-tabs container">
        
        <Router>
        <div className="menu-tab d-flex justify-content-around">
        <Link to="/"> <button className='btn-home' onClick={()=>{setSearch("Nature")}}>Home</button></Link>
        <Link to="/mountain"> <button className='btn-mountain' onClick={()=>{setSearch("Mountain")}} >Mountain</button></Link>
        <Link to="/beach"> <button className='btn-beach' onClick={()=>{setSearch("Beach")}}>Beaches</button></Link>
        <Link to="/birds"> <button className='btn-birds' onClick={()=>{setSearch("Birds")}}>Birds</button></Link>
        <Link to="/food">  <button className='btn-food' onClick={()=>{setSearch("Food")}}>Food</button></Link>
        <Routes>
        <Route  path='/' component={ <App /> }/>
       
        </Routes>
        </div>
          </Router>
    </div>
 </>
 )
}
export default Menus