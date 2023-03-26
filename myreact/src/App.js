import React from 'react';
import {BrowserRouter,Route,Routes, link } from "react-router-dom";
import './App.css';
import Tweets from "./Tweets";
import Select from "./Select";
import Popup from "./Popup";
function App() {
 

  return (
  <BrowserRouter>
  <div>
    <div className='App'>
      <main>
        
        <Routes>
          <Route path="/" element={<Tweets/>}/>
        

        </Routes>
        <Select/>
        {/* <Popup/> */}


      </main>


    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
