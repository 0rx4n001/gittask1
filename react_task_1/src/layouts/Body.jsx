import React from 'react'
import Card from '../conponents/Cards/Card'
import './Body.css'
import image1 from './samsung.png';
import image2 from './motorola1.jpg';
import image3 from './motorola2.jpg';
import image4 from './xiaomi.png';
import StateCard from '../conponents/task2_components/StateCard';


const Body = () => {
  const Products = [
    {
      id:0,
      prod_name: "Samsung Galaxy A25 ( SM-A256)",
      seller_name:"Orxan Bayramov",
      wievs: "200,423",
      reyting: "4.0",
      popularity: "Most popular",
      price: "$1600",
      src: image1,
    },
    {
      id:1,
      prod_name: "Motorola G23 8 GB 128 GB/Steel",
      seller_name:"Ləman Hacılı",
      wievs: "10,123",
      reyting: "4.1",
      popularity: "Popular",
      price: "$1000",
      src: image2,
    },
    {
      id:2,
      prod_name: "Motorola E13 2 GB 64 GB Aurora",
      seller_name:"Xəyyam Səfərli",
      wievs: "123",
      reyting: "3.8",
      popularity: "Unrecognized ",
      price: "$800",
      src: image3,
    },
    {
      id:3,
      prod_name: "Xiaomi Redmi Note 13 Pro+ 8 GB",
      seller_name:"Sərxan Ağayev",
      wievs: "16,123",
      reyting: "4.0",
      popularity: "Most popular",
      price: "$600",
      src: image4,
    },
    
  ]
  return (
    <div className='wrapper'>
      {/* <StateCard/> */}
      {/* {Products.map((item)=>(
        <Card key={item.id} product_name={item.prod_name} seller={item.seller_name} wievs={item.wievs} reyting={item.reyting} popularity={item.popularity} price={item.price} src={item.src} />
        ))}  */}
       </div>
  )
}

export default Body
