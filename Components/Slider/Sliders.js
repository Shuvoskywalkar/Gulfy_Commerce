import React, { Fragment ,useEffect,useState} from 'react';
import Head from 'next/head';

import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import Image from 'next/image';


export default function Sliders(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
           img:"https://source.unsplash.com/random/1080x600"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:"https://source.unsplash.com/random/1080x600"
          },
          {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
           img:"https://source.unsplash.com/random/1080x600"
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
         img:"https://source.unsplash.com/random/1080x600"
      },
    ]
 const[images,setImages]=useState([])
useEffect(()=>{
  fetch('https://calm-sands-41828.herokuapp.com/getReviews/')
    .then(res=>res.json())
    .then(reviwes=>{
      // console.log(reviwes)
      const last3Reviews=reviwes.slice(Math.max(reviwes.length - 3,1))
      console.log(last3Reviews)
     setImages(last3Reviews)
    })
},[0])
  

    // console.log(images)
    return (
        <Carousel style={{position:"relative"}}
        next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
        prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
        >
            {
                images.map( (item, i) => <Item key={i} item={item}  /> )
            }
        </Carousel>
    )
}

 function Item(props)
{
    return (
        <Paper>
          {/* {console.log(props.item.Message)} */}
          {/* <h2>{props.item.Message}</h2> */}
          <img alt="huuuuu" style={{width:"100%",minHeight:"30rem",maxHeight:"40rem"}} className="" src={`data:image/png;base64,${props.item.ReviewerImage.img}`}/>
        </Paper>
    )
}
