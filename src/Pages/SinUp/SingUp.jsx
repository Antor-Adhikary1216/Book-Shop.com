import React from 'react';
import { Link } from 'react-router';

const SingUp = () => {
    return (
        <div className='md:w-300 mx-auto'>
          <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-col gap-10">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SingUp now!</h1>
     
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
        </fieldset>
      </div>
    </div>
    <Link to="/"> <button className="btn bg-red-100 ">Back to Home!!!</button></Link>
  </div>
  
</div>
        </div>
    );
};

export default SingUp;