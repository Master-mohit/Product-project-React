import React from 'react'
import { useState } from 'react';

export const Create = () => {

  const [title , settitle ] = useState("");
  const [image , setimage ] = useState("");
  const [category , setcategory ] = useState("");
  const [price, setprice] = useState("");
  const [discription, setdiscription] = useState("");
  return (
    <>    
    <form onSubmit={submitHandler} className='flex items-center flex-col p-[5%] h-screen w-screen'>
    <h1 className='text-2xl font-bold  w-1/2 mb-3 '>Add New Product</h1>

    <input type="url" placeholder='image link' 
        className='mb-3 p-3 text-1xl bg-zinc-100 w-1/2 rounded'
        onChange={(e)=> setimage(e.target.value)}
        value={image}
        />

        <input type="text" placeholder='title' 
        className='mb-3 p-3 text-1xl bg-zinc-100 w-1/2 rounded'
        onChange={(e)=> settitle(e.target.value)}
        value={title}
        />
      
      <div className='w-1/2 flex justify-center items-center gap-3'>
      <input type="text" placeholder='category' 
        className='mb-3 p-3 text-1xl bg-zinc-100 w-1/2 rounded'
        onChange={(e)=> setcategory(e.target.value)}
        value={category}
        />

        <input type="number" placeholder='price' 
        className='mb-3 p-3 text-1xl bg-zinc-100 w-1/2 rounded'
        onChange={(e)=> setprice(e.target.value)}
        value={price}
        />
      </div>

      <textarea  className=' p-2 mb-3 text-1xl bg-zinc-100 w-1/2 rounded'
       placeholder='enter product description here..'
        onChange={(e)=> setdiscription(e.target.value)}
        value={discription}></textarea>

       <div className='w-1/2'>
     <button className='py-2 px-5 border rounded border-blue-200 text-blue-300 overflow-y-hidden overflow-y-auto'>Add New Product</button>
       </div>

    </form>
    </>
  )
}

export default Create;