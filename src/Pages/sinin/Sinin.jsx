
import React from 'react';
import { Link } from 'react-router';

const Sinin = () => {
    return (
        <div>
             <div className='md:w-300 mx-auto'>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-col gap-10">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sing In now!</h1>
     
    </div>
    <div className="card bg-base-100 w-100 max-w-sm shrink-0 shadow ">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
           <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  Login with Email
          </button>
         <Link to="/singUp"> <button className="btn btn-active bg-blue-500 w-84 text-[16px] text-white">SingUp </button></Link>
        </fieldset>
      </div>
    </div>
    <Link to="/"> <button className="btn bg-red-100 ">Back to Home!!!</button></Link>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default Sinin;