import React, {  useEffect, useState } from "react";
import axios from "axios";

const Alubms="https://jsonplaceholder.typicode.com/albums"
function Userpage(){
    const [alubm,setalubm]=useState([])
    async function userhandler() {
        const response=await axios.get(Alubms)
        setalubm(response.data)
    }
    useEffect(function(){
        userhandler()
    },[])
    return (
    <div>
        {alubm.map(function(item){
            return(
               <div>
                <h3 style={{color:"black"}}>Title:{item.title}</h3> 
                </div>
            )
        })}
    </div>
  )
}
export default Userpage;