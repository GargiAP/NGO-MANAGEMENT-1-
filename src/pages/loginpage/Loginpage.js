import React from 'react';
 import { FaUser, FaLock } from 'react-icons/fa';
 import './loginpage.css';
 
 const LoginPage = () => {
   return (
     <div className="login-wrapper">
   <form className="login-card">
       <form className="login-card">
         <h1 className="login-title">Login</h1>
 
     <h1 className="login-title">Login</h1>
     
     <div className="input-container">
       <FaUser className="icon" />
       <input type="text" placeholder="Username" required />
     </div>
         {}
         <div className="flex-input-group">
           <div className="input-container">
             <FaUser className="icon" />
             <input type="text" placeholder="Username" required />
           </div>
           <div className="input-container">
             <FaLock className="icon" />
             <input type="password" placeholder="Password" required />
           </div>
         </div>
 
     <div className="input-container">
       <FaLock className="icon" />
       <input type="password" placeholder="Password" required />
     </div>
                                                                
     <button className="login-button" type="submit">Login</button>
         <button className="login-button" type="submit">Login</button>
 
     <div className="login-subtext">
       <p>Don’t have an account?</p>
       <p className="create-account">Create Account</p>
         <div className="login-subtext">
           <p>Don’t have an account?</p>
           <p className="create-account">Create Account</p>
         </div>
         </div>
       </form>
       </form>
     </div>
 
   );
 };
 
 export default LoginPage;