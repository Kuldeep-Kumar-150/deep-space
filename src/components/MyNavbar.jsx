import React from 'react'
import { Container } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <nav className='nav_bg py-4'>
                <Container>
                    <ul className='d-flex align-items-center justify-content-end mb-0'>
                        <li className='mx-4 p-0'><a className='nav_links' href="#">Home</a></li>
                        <li className='mx-4 p-0'><a className='nav_links' href="#">About Us</a></li>
                        <li className='mx-4 p-0'><a className='nav_links' href="#">Games</a></li>
                        <li className='mx-4 p-0'><a className='nav_links' href="#">FAQs</a></li>
                        <li className='mx-4 p-0'><a className='nav_links' href="#">Contact</a></li>
                    </ul>
                </Container>
            </nav>
        </>
    )
}

export default MyNavbar