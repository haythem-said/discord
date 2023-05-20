import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import {selectUsers} from "./features/userSlice";
import Login from "./Login";
import {login,logout} from './features/userSlice'
import {auth} from './Firebase'
function App() {
  const dispatch=useDispatch()
  const user = useSelector(selectUsers);
  useEffect(()=>{
     auth.onAuthStateChanged((authUser)=>{
      if(authUser) {
         dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          displayName:authUser.displayName,
          email:authUser.email
         }))
      }else {
       dispatch(logout())
      }
     })
  },[dispatch])
  return (
    <div className="App">
      {user ? (
        <>
          {" "}
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
