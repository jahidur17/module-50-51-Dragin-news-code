import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user, loading);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    };


     const signIn = (email, password) =>{
       
        return signInWithEmailAndPassword(auth, email, password);
     };

     const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)

     };

    //  forgot password

    const forgotPassword = (email) =>{
        return sendPasswordResetEmail(auth,email);
    }

    //google login
     const googleLogin = () =>{
        return signInWithPopup(auth, provider)
     }

     //github login
     const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider);
     }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };


    

    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser);
             setLoading(false);
        })
        return ()=>{
           unSubscribe();
        }
    },[])


    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      loading,
      setLoading,
      updateUser,
      forgotPassword,
      googleLogin,
      githubLogin,
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;