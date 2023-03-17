import React from 'react'
import manFlag from '../assets/image/webp/man-with-flag.png'
import Slider from 'react-slick';

const MySlider = () => {
    var settings = {
        dots:false,
        infinite: true,
        Arrow: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-darkblue overflow-hidden py-5'>
                <div className="py-5">
                    <Slider {...settings} className='transform-rotate pt-5'>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                    </Slider>
                    <Slider {...settings} className='transform-rotate pt-1'>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default MySlider