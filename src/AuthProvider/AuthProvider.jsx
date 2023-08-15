/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)

const Auth=getAuth(app);
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

  const creatAccount=(email,password)=>{
          return createUserWithEmailAndPassword(Auth,email,password)
  }

  const information={
    user,
    creatAccount
 }
    return (
       <AuthContext.Provider value={information}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;