import { useRef, useState } from "react";
import { signup,logout,login, useAuth } from "./firebase";

function App() {
  const [ loading, setLoading ] =useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef =useRef();

  async function handleSignup(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    }
    catch{
      alert("Error");
    }
    setLoading(false);
  }
  async function handleLogout(){
    setLoading(true);
    try{
      await logout();
    }catch{
alert("error!");
    }
    setLoading(false);
    
  }
  async function handleLogin(){
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    }
    catch{
      alert("Error");
    }
    setLoading(false);
  }

  return (
    <div id="main">
     <h1>God will make a way</h1>
     <div>Currently logged in as :{currentUser?.email}</div>
     <div id="fields">
     <input ref={emailRef} placeholder="Email" />
     <input ref={passwordRef} placeholder="Password" type="password"/> 
     </div>
     <button disabled={loading || currentUser } onClick={handleSignup}>Sign Up</button>
      <button disabled={loading || currentUser} onClick={handleLogin}>Log In</button>
      <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
   </div>
  );
}

export default App;
