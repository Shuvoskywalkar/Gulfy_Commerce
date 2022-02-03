import React from 'react';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Image from 'next/image'
const Details = (props) => {
      console.log(props)

    const{ProductDetail}=props;
    return (
<Fragment>
    {/* {console.log(ProductDetail)} */}
     <Head>
        <title>{ProductDetail.title}</title>
        <meta 
        name="Product Details Page"
        description={ProductDetail.description}
        />
    </Head>


<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{ProductDetail.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{ProductDetail.title}</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
        </div>
        <p className="leading-relaxed mb-4">{ProductDetail.description}</p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${ProductDetail.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      <img alt="e-commerce" className="lg:w-1/2  lg:h-auto   object-center" style={{height:"500px"}}  src={ProductDetail.picture}/>
    </div>
  </div>
</section>
   
</Fragment>
    );
};

  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  export async function getStaticPaths() {
    const res = await fetch('https://fakestoreapi.com/products/')
    const Data = await res.json()
    
    return{
      fallback:'blocking',
      paths:Data.map((dta)=>({params:{ProductDetailsPage:dta.id.toString()},}))
  ,}
}
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in

export async function getStaticProps(context) {
  const ProductDetailsPage=context.params.ProductDetailsPage;
console.log(context.params.ProductDetailsPage);
    const res = await fetch(`https://fakestoreapi.com/products/${ProductDetailsPage}`)
    const Data = await res.json()
    return {
      props: {
        ProductDetail: {
            title:Data.title,
            category:Data.category,
            description:Data.description,
            price:Data.price,
            id:Data.id,
            picture:Data.image
        },
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }

  
export default Details;