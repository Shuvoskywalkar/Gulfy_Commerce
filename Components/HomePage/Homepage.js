import React, { Fragment ,useEffect,useState} from 'react';
import Head from 'next/head';
import Home from '../Carousle/Carousle';
import Sliders from '../Slider/Sliders';
import {  Carousel } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Products from './Products';
const Homepage = (props) => {
  
  const Productss = props.products
  // console.log(productss)
const [time,settime]=useState([])


  var countDownDate = new Date("Feb 6, 2022 15:37:25").getTime();
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = ;
      
    settime({day:days,hour:hours,minute:minutes,second:seconds})
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  // console.log(time)


//   document.onreadystatechange(function () {

//     var $window = $(window);

//     function checkWindowWidth() {
      
//         var windowsize = $window.width();

//         if (windowsize > 1000) {

//             $('#navbar').css('display','block');

//         } else {

//             $('#navbar').css('display','none');

//         }
//     }

//     checkWindowWidth();

//     $(window).resize(checkWindowWidth);

// });


  // $('#navbar-btn').click(function() {
  //   $('#navbar').toggle();
  // });

  // function checkWindowWidth() {
  //   var windowsize = $window.width();

  //   if (windowsize > 1000) {
  //     $("#navbar").css("display", "block");
  //   } else {
  //     $("#navbar").css("display", "none");
  //   }
  // }

  // checkWindowWidth();

    return (
        <div>

<Home/>





{/* <Carousel/> */}
<Sliders/>



<section className="text-gray-600 body-font  ">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4 ">
  
<Products Items={Productss}/>
  
  </div>
</div>
</section>

<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto flex flex-wrap">
  <div className="flex w-full mb-20 flex-wrap">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 overflow-hidden">Master Cleanse Reliac Heirloom</h1>
    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom.</p>
  </div>
  <div className="flex flex-wrap md:-m-2 -m-1">
    <div className="flex flex-wrap w-1/2">
      <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
      </div>
      <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
      </div>
      <div className="md:p-2 p-1 w-full 
ard">
        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
      </div>
    </div>
    <div className="flex flex-wrap w-1/2">
      <div className="md:p-2 p-1 w-full 
ard">
        <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
      </div>
      <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
      </div>
      <div className="md:p-2 p-1 w-1/2">
        <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
      </div>
    </div>
  </div>
</div>
</section>

<section className="container mx-auto flex  py-24 md:flex-row flex-col items-center  timer    border-gray-800 bg-gray-900   bg-cover bg-center	bg-no-repeat		bg-fixed	" style={{minHeight:"",backgroundImage:"url('https://th.bing.com/th/id/OIP.pnOMNpKCGr08U2TkAULABAHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7')"}} >
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" >
<p id="demo" color="primary">
  {/* <div className="text-gray-50"> */}

  {
time.day + "d " + time.hour + "h "
    + time.minute + "m " + time.second + "s " }
  {/* </div> */}
</p>
  </div>

  <div className="timerText  lg:flex-grow md:w-1/2 px-16  flex flex-col  md:text-left  text-gray-100 font-bold md:mb-0 " >
    <h1 className=" h1">
   Big Sale Upcoming
  </h1>
  <h5 className="">grab your wallets , cuz we are gonna make them blow up </h5>


  {/* <Button className="mt-4 py-4 font-extrabold  w-1/2" variant="outlined" color="inherit"     >Grab ON</Button> */}
  <button className="bg-transparent mt-3 hover:bg-blue w-1/2 text-center text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">
  Grab ON
</button>

  </div>
</section>


<section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom.</p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
          <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<footer className="text-gray-600 body-font"  >  
<div className="container bg-gray-100 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
  <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Gulfy</span>
    </a>
    <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
  </div>
  <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav className="list-none mb-10">
        <li>
          <a className="text-gray-600 hover:text-gray-800">First Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Second Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Third Link</a>
        </li>
        <li>
          <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
        </li>
      </nav>
    </div>
  </div>
</div>
<div className="" style={{backgroundColor:"#212121"}} >
  <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    <p className="text-gray-50 text-sm text-center sm:text-left">© 2021 Gulfy —
      <a href="" rel="noopener noreferrer" className="text-gray-50 ml-1" target="_blank">@ShuvoPagla</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <a className="text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-50 hover:text-gray-300">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</div>
</footer>




        </div>

    );
};

export default Homepage;