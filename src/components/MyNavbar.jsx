import React from 'react'
import { Container } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <>
            <nav className='nav_bg py-4'>
                <Container>
                    <ul className='d-flex align-items-center justify-content-end mb-0 p-0'>
                        <li className='me-2 mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#">Home</a></li>
                        <li className='mx-2 mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#">About Us</a></li>
                        <li className='mx-2 mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#">Games</a></li>
                        <li className='mx-2 mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#">FAQs</a></li>
                        <li className='ms-2 mx-sm-3 mx-md-4'><a className='nav_links position-relative' href="#">Contact</a></li>
                    </ul>
                </Container>
            </nav>
        </>
    )
}

export default MyNavbar