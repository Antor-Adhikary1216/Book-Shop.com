import React from 'react';
import book from '../../../src/assets/booKBanner.png'


const Banner = () => {
    return (
        <div className='max-w-300 mx-auto mt-10  md:flex bg-pink-50 rounded-2xl p-10   justify-between '>
            <div>
                <p className='text-[56px]'>Books to freshen up <br /> your bookshelf</p>
                <button className="btn btn-primary border-none shadow-none mt-10  bg-[#23BE0A]">View The List</button>
            </div>  
            <div>
                <img src={book} alt="" />
            </div>

        </div>
    );           
};

export default Banner;