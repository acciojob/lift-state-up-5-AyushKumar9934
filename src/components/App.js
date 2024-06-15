
import React, { Children, useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [isLoggedIn,setIslogin]=useState(false);
  return (
   
    <div>
     {
      isLoggedIn?<p>Yor are logged in!</p>:<Child setIslogin={setIslogin} />
     }
    </div>
  )
}

export default App
