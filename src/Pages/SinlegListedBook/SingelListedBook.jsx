import React, { use } from 'react'
import fram from '../../assets/Frame-3.png'
import frm2 from '../../assets/Frame-2.png'


const SingelListedBook = ({b}) => {
  const {bookName,image,author,tags,yearOfPublishing,publisher,totalPages,category,rating}=b
    return (
        <div>
          {/* dropdwan manu bar  */}
          
           
           <div className="card  card-side mt-13 shadow-sm p-5">
  <figure className='p-5 bg-base-300 rounded-xl' >
    <img
      src={image}
      alt="Movie" className='w-30' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
   <p className=''><span className='mr-3 text-lg font-bold text-[#524f4f]'>By:</span><span className='text-[16px] text-[#747171]'>{author}</span></p>

            <div className='flex w-108 '>
                <p className='font-bold'>Tags</p>
            <div className='flex'>
                  {
                tags.map(tag=><p className=''><span className='bg-base-300 text-[16px] text-green-800 p-1 rounded-full'>#{tag}</span></p>)
              }
            </div>
              <img src='../../../src/assets/Frame.png' alt="" className='w-5 h-5' />
              <p className='text-[#524f4f] text-[16px] font-semibold'>Year of Publishing:   {yearOfPublishing}</p>
           </div>
          <div>
              <ul className='flex gap-2.5'>
                <img src={fram} alt="" />
                <li> Publisher: {publisher}</li>
                <img src={frm2} alt="" />
                <li>Page{totalPages}</li>
              </ul>
          </div>
          <div className='border-b border-gray-400'></div>

          <div>
            <ul className='flex gap-10 mt-5'>
              <li className=' bg-[#dfdeec]  p-3 rounded-full text-blue-600 text-[16px] font-semibold'>Category: <span>{category}</span></li>
              <li className='bg-[#f7f8bc] p-3 rounded-full text-[16px] text-[#555249] font-semibold '>Rating: <span>{rating}</span></li>
              <li><button className="btn btn-outline rounded-full bg-green-600 text-white border-none">View Details</button></li>
            </ul>
          </div>






    
  </div>
</div>

            
           
        </div>
    );
};

export default SingelListedBook;




// {
//     "bookId": 4,
//     "bookName": "The Catcher in the Rye",
//     "author": "J.D. Salinger",
//     "image": "https://i.ibb.co.com/tYSWRfG/catcherrye-edited-1-800x.png",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 224,
//     "rating": 4.3,
//     "category": "Fiction",
//     "tags": [
//         "Young Adult",
//         "Identity"
//     ],
//     "publisher": "Little, Brown and Company",
//     "yearOfPublishing": 1951
// }