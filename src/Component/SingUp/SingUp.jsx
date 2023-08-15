// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingUp = () => {
 const {creatAccount}=useContext(AuthContext)

 const handelsingup=(event)=>{
    event.preventDefault();
    const email= event.target.email.value;
    const password= event.target.password.value;
    console.log(email,password)

    creatAccount(email,password)
    .then((result)=>{
        const user = result.user;
        console.log(user)
    })
    .catch((error)=>{
        console.log(error.message)
    })
 }
    return (
        <div>
            <form onSubmit={handelsingup}>
             <h2>sing up</h2>
             <input type="email" name='email' placeholder='Enter Your Email'/> <br />
             <input type="password" name='password' placeholder='Enter Your Password'/> <br />
             <button>Login</button>
            </form> 
        </div>
    );
};

export default SingUp;