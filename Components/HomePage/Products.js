import React, { Fragment ,useEffect,useState} from 'react';
import {useRouter}  from "next/router";
import Link from 'next/link';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import { faCoffee, faEye, faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = (props) => {

const ShowItemsR1=props.Items.slice(0, 8);

// const router = useRouter();
// const gotoDetailsPage = (id)=>{
//   console.log(id)
  // console.log("tpa khisi")
  // router.push("/Cart");
// }
    return (
        
        
                    ShowItemsR1.map((post) => (
            <Link href={`/${post._id}`} key={post._id}>
               <div   className="lg:w-1/4 md:w-1/2 p-4 w-full ard group relative "  >
      <a className="block h-48 rounded overflow-hidden items-center justify-content-center ">
        <img  alt="ecommerce" className="opacity-100 group-hover:opacity-10 group-hover:bg-gray-100" src={post.image}/>
<div className="	photoIcons   ">

<button className="font-medium bg-gray-500 hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 mr-3 rounded-full">
<FontAwesomeIcon icon={faEye} />
</button>
<button className="font-medium bg-gray-500 hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 ml-3 rounded-full">
<FontAwesomeIcon icon={faHeart} />
</button>

</div>
      </a>
      <div className="mt-4 h-40">
      <div className="rating">
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStarHalf} />
            </div>
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{post.address}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{post.title}</h2>
       <span className="flex">

       <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg> 

            <p className="mt-1 "><span className="font-extrabold">{post.price}</span> <br/> 25% off </p>

       </span>
          
                               
      </div>
      
      {/* <div className="buttonContainer"> */}
      <button className="bg-transparent CartBtn mt-3 hover:bg-gray-500 group-hover:bg-gray-500 text-gray-900 font-semibold hover:text-white group-hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent group-hover:border-transparent rounded">
  Add to Cart 

  
</button>  
{/* </div> */}
    
    </div>
    </Link>
    ))
  


    );
};

  export default Products
