
import React, { Children, useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [isLoggedIn,setIslogin]=useState(false);
  return (
   
    <div>
      <h1>Parent Component</h1>
     {
      isLoggedIn?<p>You are logged in!</p>:<Child setIslogin={setIslogin} />
     }
    </div>
  )
}

export default App
