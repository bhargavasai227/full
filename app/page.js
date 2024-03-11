'use client';

import { useState, useEffect } from 'react';
import { signout } from "../firebase";

export default function Home() {
  const [userResponse, setUserResponse] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    if (storedUser) {
      setUserResponse(storedUser);
     
    }
  }, []); 



  const out = async () => {
    await signout();
    setUserResponse(null); 
    window.localStorage.removeItem("user"); 
  }
  console.log(userResponse);
  return (
    <>
    <div className='flex flex-row-reverse m-4'>
    
      {!userResponse && (
        <a href="/login">login</a>
      )}
      {userResponse && (
        <button onClick={out}>Sign out</button>
      )}
    </div>
    {userResponse&&(
    <div>
      <img src={userResponse.photoURL} alt='pic'/>
      <h1>{userResponse.displayName}</h1>
    </div>)}
    </>
  );
}
