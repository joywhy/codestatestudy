import React,{useState} from "react";
const Tweets =() =>{

    
        const [name,setName]=useState("");

        const handleChange =(e)=>{
            setName(e.target.value);
        };

        const handleClick =()=>{
            alert(name);
        };

    
    return (
        <div>
            <input type="text" value={name} onChange={handleChange}></input>
            <button onClick ={handleClick}>button</button>
            <h1>{name}</h1>
        </div>

    );


}


export default Tweets;