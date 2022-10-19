import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContexts = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log(loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => unSubscribe();
    } , [])

    const authInfo = {user, loading, createUser, signIn, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;