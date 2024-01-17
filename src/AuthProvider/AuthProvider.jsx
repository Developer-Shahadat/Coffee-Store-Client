import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const[loader, setLoader] = useState(true);
    const signUp = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userInfo = {
        user,
        loader,
        signUp
    }
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;