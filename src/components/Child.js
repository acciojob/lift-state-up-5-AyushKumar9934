import React from 'react'

const Child = ({setIslogin}) => {
  return (
    <div><form>
        
        <label htmlForfor="username">Username:</label>
        <input id='username' type='text'/><br></br>
        <label htmlForfor="password">Password:</label>
        <input id='password' type='password'/><br></br>
        <button type='submit' onClick={(e)=>{
            e.preventDefault();
            setIslogin(true)}}>Submit</button>
        
        </form></div>
  )
}

export default Child