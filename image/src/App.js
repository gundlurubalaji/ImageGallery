import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Menus from './components/Menus';
import Menuitems from './components/Menuitems';
import { CategoryContext } from './components/Context';
import { useState ,useEffect} from 'react';
import { searchImages } from './components/Fetchimages';


function App() {
  const [imgs, setImgs]=useState([])
   const [search,setSearch]=useState("Nature")
  useEffect( ()=>{
    
    fetchData()

   },[search])
 

   async function fetchData() {
    const res = await searchImages(search);
    
    setImgs(res.data.results)
    }
  return (
<CategoryContext.Provider value={{image:[imgs, setImgs],query:[search,setSearch]}}>
    <div className="App">
      
    <h1 className="mt-5 text-center main-heading my-5">Image Gallery</h1>
        <Search  />
         <Menus/>
         <Menuitems />
        
    </div>
    </CategoryContext.Provider>
  );
}

export default App;
