import React from 'react'
import rectImg from '../assets/image/webp/Group-18.png'
import studentWithBook from '../assets/image/svg/student-with-book.svg'
import ufoTwo from '../assets/image/svg/UFO2.svg'
import { Container } from 'react-bootstrap'

const GamePlay = () => {
    return (
        <>
            <section className='game-play-bgimage py-lg-5 position-relative overflow-hidden'>
                <Container className='mt-5 pb-5'>
                    <h3 className='text-center text-white fs_70 fs-semibold ff_grandlander py-3 py-lg-5'>Game Play</h3>
                    <img className='w-100 pb-5' src={rectImg} alt="image" />
                    <div className='student-img d-none d-xl-block'>
                        <img className='w-100' src={studentWithBook} alt="image"/>
                    </div>
                    <div className="ufo-2-img">
                        <img className='w-75' src={ufoTwo} alt="ufoTwo" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GamePlay