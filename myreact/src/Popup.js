import React,{useState} from "react";

function Popup (){
    const [showPopup,setshowPopup]=useState(false);
    

    const handlePopup=()=>{
       setshowPopup(!showPopup);  
    } 
   // console.log(showPopup);

    return(
        <div className="Popup">
            <h1>Fix me to open Pop up</h1>
            <button className="open" onClick={handlePopup} > open me</button>
            {/* {
                showPopup ? <div></div>  :null
            } */}
        </div>
    );

}

export default Popup;