import React from 'react'
import deepSpace from '../assets/image/svg/deepspace.svg'
import manWithDiamond from '../assets/image/svg/man-with-diamond.svg'
import ufoImage from '../assets/image/svg/UFO.svg'
import { Container } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <>
            <header className='py-5 d-flex flex-column align-items-center justify-content-center flex-grow-1 position-relative'>
                <div className='hero-section-layer'> </div>
                <Container className='py-5'>
                    <div className='d-flex justify-content-center pt-sm-5'>
                        <img className='w-75' src={deepSpace} alt="deepSpace" />
                    </div>
                    <div className="d-flex justify-content-center text-center pt-3">
                        <p className='text-width fs_18 fw-semibold ff_grandlander text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod felis, dolor porta tincidunt consectetur nulla ac facilisis. Elit commodo amet, auctor et. Donec aliquet viverra in mauris nunc.</p>
                    </div>
                        <div className="d-flex justify-content-center pt-4 pb-5 mb-sm-5 pt-xxl-5">
                            <a href="#" className='fs_24 fw-semibold text-white ff_grandlander play_now_btn'>Play Now</a>
                        </div>
                    <div className='man-diamond-img d-none d-xl-block'>
                        <img className='w-100' src={manWithDiamond} alt="man" />
                    </div>
                    <div className='ufo-img d-none d-lg-flex'>
                        <img className='w-100' src={ufoImage} alt="man" />
                    </div>
                </Container>

            </header>
        </>
    )
}

export default HeroSection