import React from 'react'
import manFlag from '../assets/image/webp/man-with-flag.png'

const Slider = () => {
    return (
        <>
            <section className='bg-darkblue overflow-hidden py-5'>
                    <div className="d-flex align-items-center pt-5 transform-rotate w-100">
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                    </div>
                    <div className="d-flex align-items-center pb-5 transform-rotate">
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                        <div className='flag-img w-100'><img className='w-100' src={manFlag} alt="manFlag" /></div>
                    </div>
            </section>
        </>
    )
}

export default Slider