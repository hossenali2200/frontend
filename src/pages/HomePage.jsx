 import React from 'react'
 import Layout from '../components/Layout/Layout'
 import Carousel from 'react-bootstrap/Carousel';
import Testimonia from './Testimonia';
 
 const HomePage = () => {
   return (
     <Layout> 
           <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          align="center"
          width={1900} height={500}
          className=""
          src="https://images.pexels.com/photos/20186041/pexels-photo-20186041/free-photo-of-barn-on-field-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="First slide"
        />
         
      </Carousel.Item>
      <Carousel.Item>
        <img
          align="center"
          width={1900} height={500}
          className=""
          src="https://images.pexels.com/photos/17738486/pexels-photo-17738486/free-photo-of-cliffs-on-the-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          align="center"
          width={1900} height={500}
          className=" "
          src="https://images.pexels.com/photos/14747091/pexels-photo-14747091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Third slide"
        />
         
      </Carousel.Item>
    </Carousel>
    <Testimonia />
     </Layout>
   )
 }
 
 export default HomePage