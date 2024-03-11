'use client';

import { useState, useEffect } from 'react';
import { gAuth, signout } from "../firebase";

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

  const out = async () => {
    await signout();
    setUserResponse(null); 
    window.localStorage.removeItem("user"); 
  }

  return (
    <div>
      {!userResponse && (
        <button onClick={logGoogleUser}>Sign In With Google</button>
      )}
      {userResponse && (
        <button onClick={out}>Sign out</button>
      )}
    </div>
  );
}
