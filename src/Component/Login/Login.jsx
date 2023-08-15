// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Login.css'
const Login = () => {
  const handelSubmit=(event)=>{
    event.preventDefault();
    const email= event.target.email.value;
    const password= event.target.password.value;
    console.log(email,password)
  }
    return (
        <div>
           <form onSubmit={handelSubmit}>
             <h2>Login</h2>
             <input type="email" name='email' placeholder='Enter Your Email'/> <br />
             <input type="password" name='password' placeholder='Enter Your Password'/> <br />
             <button>Login</button>
            </form> 
        </div>
    );
};

export default Login;