import React from 'react'
import Slider from 'react-slick'
 


const TestimonialData = [
    {
        id:1,
        name:"Habib",
        text:"Birdweb is best problem solution services in bangladesh. They have many young energetic developer for solution in all problem",
        img:"https://picsum.photos/101/101"
    },
    {
        id:2,
        name:"Nozrul",
        text:"I m very happy to work with BirdWeb. They are very helpfull and work very herd for their clients",
        img:"https://picsum.photos/103/103"
    },
    {
        id:3,
        name:"Islam",
        text:"Are you worried about Software problem? then you go to Birdweb for all solution in it problem",
        img:"https://picsum.photos/102/102"
    },
    {
        id:4,
        name:"Murshed",
        text:"Their customer service is awosome.24/7 hour they help their clients",
        img:"https://picsum.photos/104/104"
    },
]

const Testimonia = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite:true,
        speed:500,
        slidesToShow: 4,
        slideToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
             
          }
            },
            {
                breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
            },
            {
                breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
            },
        ]
    }
  return (
    <div className='py-14 mb-10'>
        <div className="container ">
            {/*header section */}
            <div className='text-center mb-10 '>
                <h1 data-aos="fade-up" className='text-4xl font-bold font-cursive text-gray-800 dark:text-white'>Our Happy Clients</h1>
            </div>
            {/*Testimonial cards section */}
            <div data-aos="zoom-in">
                <Slider {...settings} >
                    {
                        TestimonialData.map((data, index) => {
                            return( 
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 w-[400px] shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                     {/*image section */}
                                    <div className='mb-4'>
                                        <img src={data.img} alt="" className=' rounded-full w-20 h-20'/>
                                    </div>
                                     {/*content section */}
                                     <div className=' flex flex-col items-center gap-4 '>
                                        <div className=' space-y-3'>
                                            <p className='text-xs text-slate-900 dark:text-white'>{data.text}</p>
                                            <h1 className=' text-xl font-bold text-black/80 dark:text-white font-cursive mt-5'>{data.name}</h1>
                                        </div>
                                     </div>
                                     <p className='text-black/20 dark:text-white text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>
                            </div>)
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonia