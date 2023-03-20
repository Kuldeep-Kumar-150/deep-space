import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const ReactNav = () => {
    const [first, setfirst] = useState(true);
    if (first) {
        document.body.style.overflow = "visible"
    }
    else {
        document.body.style.overflow = "hidden"
    }
    return (
        <>
            <section className='py-3'>
                <Container>
                    <div className='d-flex d-lg-none justify-content-end'>
                        <button className='btn bg-primary' onClick={() => setfirst(false)}>openNav</button>
                    </div>
                    <ul className={first ? "hide_nav d-lg-none" : "show_nav d-lg-none"}>
                        <button className='btn-close mt-5 ms-5 opacity-100 shadow-0 bg-danger' onClick={() => setfirst(true)}></button>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-1</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-2</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-3</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-4</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-5</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-6</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-7</a></li>
                        <li><a className='text-white mx-4 nav_links' href="#">LINKS-7</a></li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default ReactNav