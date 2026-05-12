import React from 'react';
import Navbar from '../../Comopenets/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Comopenets/Footer/Footer';

const Root = () => {
    return (
        <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
                <Footer></Footer>


        </div>
    );
};

export default Root;