import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Frame from "../assets/image/webp/teamFrame.webp";
import annika from "../assets/image/webp/annika.webp";
import david from "../assets/image/webp/david.webp";
import christina from "../assets/image/webp/christina.webp";
import teammemberchristina from "../assets/image/webp/teammemberchristina.webp";
import teammemberdavid from "../assets/image/webp/teammemberdavid.webp";
import teammemberannika from "../assets/image/webp/teammemberannika.webp";
const TeamFrame = () => {
  return (
    <section className="py-5 bg-dark-blue overflow-hidden">
      <Container>
        <div className="text-center">
          <h2 className="ff_grandlander fs_70 text-white">Team</h2>
        </div>
        <Row className="mt-5">
          <Col className="text-center text-xl-start" xl={4} md={6}>
            <div className="position-relative d-none d-sm-block">
              <div>
                <img src={Frame} alt="frame" />
              </div>
              <div>
                <img
                  className="team-members-christina"
                  src={christina}
                  alt="christina"
                />
              </div>
              <span className="team-text-bg-box">
                <span className="ff_grandlander fs_18 text-white pe-sm-5 pe-xl-0 ps-xl-2 ms-xl-1">
                  Lorum Ipsum
                </span>
              </span>
            </div>
            <img
              className="d-sm-none w-100"
              src={teammemberchristina}
              alt="teammemberchristina"
            />
          </Col>
          <Col className="text-center text-xl-start mt-5 mt-md-0" xl={4} md={6}>
            <div className="position-relative d-none d-sm-block">
              <div>
                <img src={Frame} alt="frame" />
              </div>
              <div>
                <img className="team-members-david" src={david} alt="david" />
              </div>
              <span className="team-text-bg-box">
                <span className="ff_grandlander fs_18 text-white pe-sm-5 pe-xl-0 ps-xl-2 ms-xl-1">
                  Lorum Ipsum
                </span>
              </span>
            </div>
            <img
              className="d-sm-none w-100"
              src={teammemberdavid}
              alt="teammemberdavid"
            />
          </Col>
          <Col
            className="text-center text-xl-start mt-5 mt-xl-0"
            xl={4}
            md={12}
          >
            <div className="position-relative d-none d-sm-block">
              <div>
                <img src={Frame} alt="frame" />
              </div>
              <div>
                <img
                  className="team-members-annika"
                  src={annika}
                  alt="annika"
                />
              </div>
              <span className="team-text-bg-box team-text-bg-box-annika">
                <span className="ff_grandlander fs_18 text-white pe-sm-5 pe-xl-0 ps-xl-2 ms-xl-1">
                  Lorum Ipsum
                </span>
              </span>
            </div>
            <img
              className="d-sm-none w-100"
              src={teammemberannika}
              alt="teammemberannika"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamFrame;
