import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);
    const [loader,setLoader] = useState(true);

    //create user
    const createUser = (email,password) =>{
        setLoader(true);
       return createUserWithEmailAndPassword(auth,email,password);
    }

    //Sign In user
    const logIn = (email,password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
  
    //Sign Out
    const logOut = () =>{
        setLoader(true);
       return signOut(auth)
    }

    //OnState process 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser=>{
            console.log('Current state is changed');
            setUser(currentUser);
            setLoader(false);
        }))
        return ()=>{
            unsubscribe();
        }
    },[])
      
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loader
    };
    return (
        <AuthContext.Provider value={authInfo}>
         {
            children
         }
        </AuthContext.Provider>
    );
};

export default AuthProvider;