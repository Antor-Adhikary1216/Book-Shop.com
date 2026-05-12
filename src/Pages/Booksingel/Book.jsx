import React from 'react';
import { Link } from 'react-router';


const Book = ({card}) => {
    // console.log(card)
    const {image,bookName,author,rating , bookId, tags,category}=card
    return (
        <>
        <Link to={`bookdetails/${bookId}`}>
         <div>
         
       <div className="card  h-120 shadow-md   p-10 ">
  <figure className='bg-[#f3f3f3] p-5 rounded-r-2xl'>
    <div className=' p-20'>
        <img className='w-40  object-cover  '
      src={image}
      alt="" />
    </div>
  </figure>
  <div className="card-body">
    <div className='bg-amber-200  py-3 text-center  rounded-full  text-[17px]  '>
    {
       tags.map(tag=> <button>{tag}</button>) 
       
       
    }
</div>
   
    <h2 className="card-title">{bookName}</h2>
    <p><span className='mr-1 font-bold text-lg'>By:</span> <span className='font-medium text-[#1F1818]'>{author}</span></p>
   <div className='border-b border-gray-500 '>

   </div>
    <div className=" relative top-6 flex  justify-between text-[18px] ">
       {category}
      <div className='flex gap-2  '>
       <p >{rating}</p>
       <span><i class="fa-regular fa-star"></i></span>
      </div>
    </div>
  </div>
</div>
        </div>
        </Link>
        </>
    );
};

export default Book;



// {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": [
//         "Fiction",
//         "Romance"
//     ],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
// }