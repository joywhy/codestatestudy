import React,{useState} from "react";


function Select(){

    const fruits =["banana","apply","pear"];
    const fruitsHtml =fruits.map((x,idx)=>{
        return (
            <option value={x}>{x}</option>
        );
    });
    const [furit,setFruit]=useState("banana");

    const handleFruit=(e)=>{
        setFruit(e.target.value);
    }
    return (
        <div className="Select" >
            <select onChange={handleFruit}>{fruitsHtml}</select>
            <h1>당신이 고른 과일은 {furit}</h1>
        </div>
    );

}

export default Select;