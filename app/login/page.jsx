'use client';

import { useState, useEffect } from 'react';
import { gAuth, signout } from "../../firebase";

export default function Home() {
  const [userResponse, setUserResponse] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(window.localStorage.getItem("user"));
    if (storedUser) {
      setUserResponse(storedUser);
    }
  }, []); 

  const logGoogleUser = async () => {
    try {
      const response = await gAuth();
      const user = response.user;
      setUserResponse(user);
      window.localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Google Authentication Error:", error);
    }
  }

  return (
    <div className='flex justify-center items-center m-4'>
    
      {!userResponse && (
        <button onClick={logGoogleUser}>Sign In With Google</button>
      )}
      {userResponse && (
        <a  href='/'>Home</a>
      )}
    </div>
  );
}
