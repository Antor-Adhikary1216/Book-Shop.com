import React from 'react';
import Banner from '../Banner/Banner';
import BooksData from '../../Pages/Books/BooksData';
import { data, useLoaderData,  } from 'react-router';
 




const Hoome = () => {
    const fetheData = useLoaderData();
    // console.log(fetheData)


    return (
        <div>
         <Banner></Banner>
         <BooksData fetheData={fetheData}></BooksData>
        </div>
    );
};

export default Hoome;