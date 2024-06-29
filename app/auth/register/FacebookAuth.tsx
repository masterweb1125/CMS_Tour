"use client"
import React, { useEffect, useState } from 'react';
import { auth } from '../../../firebase.js';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';

const facebookProvider = new FacebookAuthProvider();

const FacebookAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error('Facebook sign-in error:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Signed in as: {user.displayName}</p>
          <p>Email: {user.email}</p>
          {/* Add a sign out button if needed */}
        </div>
      ) : (
        <button onClick={handleFacebookSignIn}>
          Sign in with Facebook
        </button>
      )}
    </div>
  );
};

export default FacebookAuth;