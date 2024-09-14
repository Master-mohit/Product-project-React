import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import {productContext} from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/Axios';

function Home() {

  const [products] = useContext(productContext);
  const { search } = useLocation();
  const category =decodeURIComponent(search.split("=")[1]);

  console.log(search);


  const [Filterpro, setFilterpro] = useState(products);

  const getproductcategory = async() => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterpro(data);

      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    if(category.length > 0)
       getproductcategory();
  }, [category])

  console.log(Filterpro);
  
  return products ? (
    <>
      <Nav />
      <div 
      className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
  {Filterpro&& Filterpro.map((p, i) => (
  <Link
    key={p.id}  // Or use the index 'i' if no unique key is available
    to={`/details/${p.id}`}
    className='mr-7 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center'
  >
    <div
      className='hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center'
      style={{ backgroundImage: `url(${p.image})` }}
    />
    <h1 className='hover:text-blue-300'>{p.title}</h1>
  </Link>
))}
    
      </div>
      </>
) : (
  <Loading/>
);
}

export default Home;
