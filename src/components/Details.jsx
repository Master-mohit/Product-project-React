import axios from '../utils/Axios';
import React, {useContext, useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import { productContext } from '../utils/Context'; 


function Details() {
  const [products, setproducts] = useContext(productContext);
const [product , setproduct] = useState(null)
const {id} = useParams();
  console.log(id);
  // const getsingleproduct = async() => {
  //   try {
  //     const {data} = await axios.get(`/products/${id}`);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  useEffect(() => {
    // getsingleproduct();
    if(!product){
      setproduct(products.filter((p)=>p.id== id)[0])
    }
  }, []);
  
  return  product ? (
    <div className='w-[70%] h-full gap-[6%]  m-auto p-[10%] flex flex-center items-center'>
      <img 
        src={`${product.image}`} 
        alt="Product Image" 
        className='w-[50%] h-[60%] mb-5' // Adjust the image size if needed
      />
      
      <div className='content'>
        <h1 className='text-2xl font-bold mb-2'>{product.title}</h1>
        <h2 className='text-xl font-semibold mb-2 text-red-300'>${product.price}</h2>
        <p className='mb-4'>{product.description}</p>
        <div className='flex space-x-4'>
          <Link to="/edit" className='px-5 py-2 border rounded border-blue-200 text-blue-300 hover:underline'>Edit</Link>
          <Link to="/delete" className='px-5 py-2 border rounded border-blue-200 text-red-300 hover:underline'>Delete</Link>
        </div>
      </div>
    </div>
    ) : ( <Loading/>
  );
}

export default Details;
