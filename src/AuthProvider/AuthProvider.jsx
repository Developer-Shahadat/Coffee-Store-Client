import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const[loader, setLoader] = useState(true);

    // Sign Up
    const signUp = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Sign In
    const signIn = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
        user,
        loader,
        signUp,
        signIn
    }
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;