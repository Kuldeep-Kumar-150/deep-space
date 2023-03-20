import React from 'react'
import gifImage from '../assets/image/webp/gif-image.gif'
import earthImage from '../assets/image/svg/earth-img-2.svg'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
    return (
        <>
            <section className='aboutsection_bg_img position-relative py-5' id='About-us'>
                <div className="linear_bg"></div>
                <Container className='py-5'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div>
                                <img className='w-75 gif_border' src={gifImage} alt="image" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className=''>
                                <h1 className='text_shadow fs_70 fw-semibold ff_grandlander text-white mt-4 mt-lg-0 text-center text-lg-start'>About Us</h1>
                                <p className='fs_18 fw-light ff_grandlander text-white mt-3 text-center text-lg-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue in
                                    pharetra euismod at amet. Neque ultrices vitae at eget nisi, eget tellus
                                    tincidunt amet. Blandit pharetra, viverra feugiat consectetur neque risus.
                                    At nunc, gravida nunc cursus gravida nulla enim. Tempor gravida massa eu,
                                    enim metus ridiculus feugiat at. Leo libero, ac feugiat nunc, elementum quis
                                    tristique.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='lightblue_box'></div>
                    <div className='earth_img_2'>
                        <img className='w-100' src={earthImage} alt="image" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutUs