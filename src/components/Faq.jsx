import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ufo from "../assets/image/webp/ufo.webp";

const Faq = () => {
  return (
    <section className="py-5 bg-dark-blue"id="FAQS">
      <Container>
        <div className="text-center">
          <h2 className="ff_grandlander fs_70 text-white">FAQs</h2>
        </div>
        <Row className="mt-5 pt-4 flex-column-reverse flex-lg-row">
          <Col className="pt-5 pt-lg-0" xl={8} lg={7}>
            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="ff_grandlander">
                  <span className="pe-2">1.</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ?
                </Accordion.Header>
                <Accordion.Body className="ff_grandlander ps-5 fs-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mt-4">
                <Accordion.Header className="ff_grandlander">
                  <span className="pe-2">2.</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ?
                </Accordion.Header>
                <Accordion.Body className="ff_grandlander ps-5 fs-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="2" className="mt-4">
                <Accordion.Header className="ff_grandlander">
                  <span className="pe-2">3.</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ?
                </Accordion.Header>
                <Accordion.Body className="ff_grandlander ps-5 fs-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mt-4">
                <Accordion.Header className="ff_grandlander">
                  <span className="pe-2">4.</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ?
                </Accordion.Header>
                <Accordion.Body className="ff_grandlander ps-5 fs-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mt-4">
                <Accordion.Header className="ff_grandlander">
                  <span className="pe-2">5.</span> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit ?
                </Accordion.Header>
                <Accordion.Body className="ff_grandlander ps-5 fs-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xl={4} lg={5}>
            <div className="ps-lg-4 text-center text-sm-start">
              <img
                className="faq-ufo"
                width={300}
                height={270}
                src={ufo}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
