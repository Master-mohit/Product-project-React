import React, {useContext} from 'react'
import { productContext } from '../utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [products] = useContext(productContext);
  let distinct_category = Array.isArray(products) ? products.reduce((acc, cv) => [...acc, cv.category], []) : [];
  distinct_category = [...new Set(distinct_category)];  // Remove duplicates
  console.log(distinct_category);

const color = () => {
  return `rgba(${(Math.random()*255).toFixed()},
  ${(Math.random()*255).toFixed()},
  ${(Math.random()*255).toFixed()},04)` // uniuq colour..
} ;
console.log(color());

  return (
    <nav className='w-[15%] h-screen bg-zinc-50 flex items-center flex-col pt-5'>
        <a className='py-2 px-5 border rounded border-blue-200 text-blue-300 overflow-y-hidden overflow-y-auto' href="/create">Add New Product</a>
        <hr  className='w-[80%] my-3' />
        <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>
    
        <div className='w-[80%]  '>
       
          {distinct_category.map((c, i)=> (

    
    <Link
    key={i} to={`/?category=${c}`} className='flex items-center mb-3'> 
     <span style={{backgroundColor: color()}} className='rounded-full  mr-2 w-[15px] h-[15px] bg-blue-50'></span>{""}
      {c}
     </Link>
        ))}
        

        </div>
      </nav>

  )
}

export default Nav
