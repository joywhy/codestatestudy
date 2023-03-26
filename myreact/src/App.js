import React from 'react';
import {BrowserRouter,Route,Routes, link } from "react-router-dom";
import './App.css';
import Tweets from "./Tweets";


function App() {
 

  return (
  <BrowserRouter>
  <div>
    <div className='App'>
      <main>
        
        <Routes>
          <Route path="/" element={<Tweets/>}/>


        </Routes>
      </main>


    </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
