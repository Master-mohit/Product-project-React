import React from 'react';
import { Link } from 'react-router-dom';

function Details() {
  return (
    <div className='w-[70%] h-full gap-[6%]  m-auto p-[10%] flex flex-center items-center'>
      <img 
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
        alt="Product Image" 
        className='w-[50%] h-[60%] mb-5' // Adjust the image size if needed
      />
      
      <div className='content'>
        <h1 className='text-2xl font-bold mb-2'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h2 className='text-xl font-semibold mb-2 text-red-300'>$ 109.95</h2>
        <p className='mb-4'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <div className='flex space-x-4'>
          <Link to="/edit" className='px-5 py-2 border rounded border-blue-200 text-blue-300 hover:underline'>Edit</Link>
          <Link to="/delete" className='px-5 py-2 border rounded border-blue-200 text-red-300 hover:underline'>Delete</Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
