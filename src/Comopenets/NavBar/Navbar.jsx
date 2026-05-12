import React from 'react';
import { Link, NavLink,  } from 'react-router';

const Navbar = () => {
    return (
        <div>
          <nav className="main max-w-300 mx-auto mt-6">
            <div className="navbar  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <Link to='/'> <li><button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Home</button></li></Link>
      
        <Link to="/listedbook"><li>
         <button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Listed Books</button>
        </li></Link>
       <Link to="/pagetoread"><li><button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Pages to Read</button></li></Link>
      </ul>
    </div>  
    <a className="btn btn-ghost text-2xl">Book Vibe</a>
  </div>
  <div className="NAV navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
     <NavLink to="/"><li><button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Home</button></li></NavLink>
      <Link to="/listedbook"><li>
        <button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Listed Books</button>
      </li></Link>
    <Link to="/pagetoread"><li><button className="btn btn-outline text-[18px] text-[#5c5858] border-none">Pages to Read</button></li></Link>
    </ul>
  </div>
  <div className="navbar-end gap-2">
  
<Link to="/singUp"><button className="btn border-none shadow-none text-white text-[18px] bg-[#23BE0A]">Sign In</button></Link>
<Link to="/singUp"><button className="btn  border-none shadow-none text-white text-[18px] bg-[#59C6D2] ">Sign Up</button></Link>
  </div>
</div>
          </nav>
        </div>
    );
};

export default Navbar;