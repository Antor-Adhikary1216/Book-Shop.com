import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addTostoreDB } from '../../Comopenets/Utility/addToDB';








const BookDetails = () => {
    const data =useLoaderData();
    const {booId} = useParams();
    const prasints = parseInt(booId);
    const singeldata  = data.find(book=> book.bookId === prasints)
//    console.log(singeldata)
const {image,bookName,author,tags, bookId,review,category,totalPages,yearOfPublishing,rating,publisher}=singeldata

const heandeleMArks =id =>{

    addTostoreDB(id);
}
    return (
        <div className='md:w-300 md:mx-auto mt-10 shadow-md '>
          <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <div className='bg-[#f8d4d4] p-18 shadow-md rounded-2xl md:mb-32 mr-5'>
        <img 
      src={image}
      className=" w-100 h-100   object-contain"
    />
    </div>
    <div>
      <h1 className="text-5xl font-semibold ">{bookName}</h1>
      <p className='mt-2 '> <span className='text-lg font-bold text-gray-600 mr-2'>By:</span> <span className='text-md text-pink-400 font-semibold'>{author}</span></p>
      <div className='border-b bg-rose-400 mt-2'></div>
      <div className='flex gap-2 mt-2'>
      <p className='text-lg text-gray-500'>{category}</p>
      </div>
      <div className='border-b border-gray-600 mt-3'> </div>
      <div className='w-125'>
        <p><span className='text-[#090404] font-medium text-lg'>Review:</span> <span className='text-[#463e3e]'>{review}</span></p>
      </div>
     <div className='flex gap-7 mt-4 items-center'>
        <p className='text-2xl font-bold'>Tag:</p> {
            tags.map(tag=> <p className='bg-[#eeeaea] text-lg p-3 rounded-full text-[#097223]'>#{tag}</p>)
        }
     </div>
     <div className='border-b border-gray-300 mt-5'></div>
     <div className=" ">

        <ul className='justify-between flex w-[50%] mt-3'>
          <li>Number of Pages:</li><li className=''>{totalPages}P</li>
        </ul>
        <ul className='justify-between flex w-[50%]  mt-3'>
          <li>Publisher:</li> <li>{publisher}</li>
        </ul>
        <ul className='justify-between flex w-[50%]  mt-3'>
          <li>Year of Publishing:</li> <li>{yearOfPublishing}</li>
        </ul>
        <ul className='justify-between flex w-[50%]  mt-3'>
          <li>Rating:</li> <li>{rating}</li>
        </ul>
      
           
        
       
     </div>
     <div className='flex gap-3 mt-3'>
                <button onClick={()=>heandeleMArks(bookId)} className="btn ">Read</button>
            <button  className="btn ">Wishlist</button>
           
     </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;










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