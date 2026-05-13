import React, { Suspense, useEffect, useState } from 'react';
import { data } from 'react-router';
import Book from '../Booksingel/Book';



const BooksData = ({fetheData}) => {
    // console.log(fetheData)
    
    // const [ books , setbooks]=useState([])
   
    return (
        <div className=' md:max-w-300 mx-auto'>
                                    <p className='mt-5  text-center text-[40px] '>Books</p>
           


                                    <div className='card-main   md:grid grid-cols-3 md:mt-10 gap-10'>
                                         <Suspense fallback= {<p> <span className="loading loading-spinner loading-xl"></span></p>}>
                {
                    fetheData.map((card)=><Book key={card.bookId} card={card}></Book>)
                }
             
            </Suspense>
                                    </div>


        </div>
    );
};

export default BooksData;