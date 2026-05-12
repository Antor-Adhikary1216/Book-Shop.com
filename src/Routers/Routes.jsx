


import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Hoome from '../Comopenets/Hoom/Hoome';
import About from '../Pages/Abouts/About';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import PageToRead from '../Pages/PageToRead/PageToRead';
import BookDetails from '../Pages/BookDetails/BookDetails';
import SingUp from '../Pages/SinUp/SingUp';

export const route = createBrowserRouter([
    { path:"/",Component:Root
        , errorElement:<Error></Error>,
        children:[
            {index:true,
                loader:()=> fetch("../../public/booksData.json"),   
                path:"/",
                  Component:Hoome
                 
            },
            {
                path:"listedbook",
                Component:ListedBooks
            },
            {
                path:"pagetoread",
                Component:PageToRead
            },
            {
                path:"bookdetails/:booId",
                 loader:()=> fetch("../../public/booksData.json"),  
                Component:BookDetails
            }
        ]
        

        
    },
    {
        path:"singUp",
        Component:SingUp
    }


])