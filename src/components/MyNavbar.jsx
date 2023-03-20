import React from 'react'
import { Container } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <nav className='nav_bg py-4'>
                <Container>
                    <ul className='d-flex align-items-center justify-content-between justify-content-sm-end mb-0 p-0'>
                        <li className='mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#HOME">Home</a></li>
                        <li className='mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#About-us">About Us</a></li>
                        <li className='mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#Games">Games</a></li>
                        <li className='mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#FAQS">FAQs</a></li>
                        <li className='mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#FOOTER">Contact</a></li>
                    </ul>
                </Container>
            </nav>
        </>
    )
}

export default MyNavbar