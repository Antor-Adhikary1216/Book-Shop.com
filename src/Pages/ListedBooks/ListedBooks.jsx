import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { addTostoreBooks } from '../../Comopenets/Utility/addToDB';
import Book from '../Booksingel/Book';
import SingelListedBook from '../SinlegListedBook/SingelListedBook';
import icon from '../../assets/icon.png'

const ListedBooks = () => {
  const [readlist,setReadlist]=useState([])
  const[dropdwan, setdrapdwan  ]= useState("")
  const data = useLoaderData();

  
useEffect (()=>{

  const stordbookData  = addTostoreBooks()
  const convertedBooks= stordbookData.map(book=>parseInt(book))
  const bookIdIncludes = data.filter(bookid=> convertedBooks.includes(bookid.bookId));
  setReadlist(bookIdIncludes)
  // console.log(bookIdIncludes)
         
},[])

const heandel = (type)=>{
  setdrapdwan(type)
  if(type ===" pages"){
    const pagedrop=[...readlist].dropdwan((a,b)=> a.totalPages-b.totalPages)
    setReadlist(pagedrop)
    console.log(pagedrop )
  }
  if(type === "retings"){
    const ratings = [...readlist].dropdwan((a,s)=>a.rating - s.rating)
    setReadlist(ratings)
  }
}

    return (
        <div className='w-300 mx-auto p-10'>
          <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#807b7a]">Sort By:{dropdwan ? dropdwan:""} <img src={icon} alt="" /></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=> heandel("pages")}><a>pages</a></li>
    <li onClick={()=> heandel("retings")}><a>retings</a></li>
  </ul>
</div>
          {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
  <div className="tab-content bg-base-100 border-base-300 p-6">

    {
      readlist.map(b=><SingelListedBook b={b}></SingelListedBook> )
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6">Coming Soon...</div>
</div>
        </div>
    );
};

export default ListedBooks;