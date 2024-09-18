import React, { useContext } from 'react'
import { useState } from 'react';
import { productContext } from '../utils/Context';
import {nanoid} from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { stringify } from 'postcss';

export const Create = () => {
  const navi = useNavigate();
  const [products, setproducts] = useContext(productContext);
  const [title , settitle ] = useState("");
  const [image , setimage ] = useState("");
  const [category , setcategory ] = useState("");
  const [price, setprice] = useState("");
  const [discription, setdiscription] = useState("");

  const AddsubmitHandler = (e) => {
    e.preventDefault();

    if(title.trim().length < 5 ||
     category.trim().length <5 ||
     price.trim().length < 1 ||
     discription.trim().length < 5 ){
        alert("Each nd every input must have atleast 5 character");
        return;
     }
 
    const product = {
        id: nanoid(),
        title,
        image,
        category,
        price,
        discription,

    };
    setproducts([...products,product]);
    localStorage.setItem("products", JSON.stringify([...products,product]));
    navi("/");
    console.log(product);
    
    
  }

  return (
    <>    
    <form onSubmit={AddsubmitHandler} className='flex items-center flex-col p-[5%] h-screen w-screen'>
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