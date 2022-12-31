
import React from "react";

import BackgroundImg from "./Component/BackgroundImg/BackgroundImg";
import Searchitemlist from "./Component/SearchItemList/searchitemlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
 
      <BrowserRouter>
      <Routes>
           <Route path="/" element={<BackgroundImg />}/>
          <Route path="SearchList" element={<Searchitemlist />} />
      </Routes>
    </BrowserRouter>
     
    
       
    
  );
}


   
export default App