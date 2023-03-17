import React from 'react'
import rectImg from '../assets/image/webp/Group-18.png'
import studentWithBook from '../assets/image/svg/student-with-book.svg'
import ufoTwo from '../assets/image/svg/UFO2.svg'
import colorFullBtn from '../assets/image/webp/color-full-btn.png'
import { Container } from 'react-bootstrap'

const GamePlay = () => {
    return (
        <>
            <section className='game-play-bgimage py-lg-5 position-relative overflow-hidden'>
                <Container className='mt-5 pb-5 mb-5'>
                    <h3 className='text-center text-white fs_70 fs-semibold ff_grandlander py-3 py-lg-5'>Game Play</h3>
                    <div className="position-relative">
                        <img className='w-100' src={rectImg} alt="image" />
                        <img className='play-pause-btn crusor-pointer ' src={colorFullBtn} alt="img" />
                    </div>
                    <div className='student-img d-none d-xl-block'>
                        <img className='w-100' src={studentWithBook} alt="image" />
                    </div>
                    <div className="ufo-2-img d-none d-lg-block">
                        <img className='w-75' src={ufoTwo} alt="ufoTwo" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GamePlay