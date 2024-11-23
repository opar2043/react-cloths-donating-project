import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/_Firebase.config'
export const AuthContex = createContext()
const AuthProvider = ({children}) => {

  const [user , setUser] = useState(null);
  const [err , setErr] = useState(null);
  const [loading , setloading] = useState(true)

  // handle gmail

  function createUserbyGmail(email,pass){
   return createUserWithEmailAndPassword(auth,email,pass)
  
  }

  // log in

  function makeLogIn(email,pass){
     return signInWithEmailAndPassword(auth,email,pass)
  }

  // google Logb in
  const googleProvider = new GoogleAuthProvider()
  function googleLogIn(){
    return signInWithPopup(auth,googleProvider)
  }

  // outhstate change
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      if(currentUser){
        console.log(currentUser,'here is user');
        setUser(currentUser)
      }
    })

    setloading(false)

    return ()=>{
      unsubscribe()
    }
  },[])

  // sign out frtom account


  // forget password
  function forgetUserPass(email){
    return sendPasswordResetEmail(auth,email)
  }

  function userUpdate(updatedData){
    return updateProfile(auth.currentUser,updatedData)
  }

 const obj = {
  createUserbyGmail,
  makeLogIn,
  googleLogIn,
  user,setUser,
  err,setErr,
  loading,
  setloading,
  forgetUserPass,
  userUpdate
 }


  return (
    <AuthContex.Provider value={obj}>
        {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider