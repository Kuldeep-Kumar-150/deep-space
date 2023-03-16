import React from "react";
import { Container } from "react-bootstrap";
import footerlogo from "../assets/image/svg/footerLogo.svg";
import shiplogo from "../assets/image/svg/shipLogo.svg";
import twitterlogo from "../assets/image/svg/twitterLogo.svg";
import discordlogo from "../assets/image/svg/discordLogo.svg";
import instagramlogo from "../assets/image/svg/instagramLogo.svg";
import fblogo from "../assets/image/svg/fbLogo.svg";
import telegramlogo from "../assets/image/svg/telegramLogo.svg";
import maninspacesuit from "../assets/image/webp/man-in-space-suit.png";
const Footer = () => {
  return (
    <section className="pt-5 pb-2 footer-bg-img position-relative">
      <img
        className="man-in-space-suit d-none d-md-block"
        src={maninspacesuit}
        alt="man-in-space-suit"
      />
      <Container>
        <div className="text-center pt-5 mt-5">
          <a href="#">
            {" "}
            <img src={footerlogo} alt="logo" />
          </a>
        </div>
        <div className="text-center mt-4 pt-2">
          <a className="mx-3" href="#">
            <img className="sociallogo" src={shiplogo} alt="shiplogo" />
          </a>
          <a className="mx-3" href="#">
            <img className="sociallogo" src={twitterlogo} alt="twitterlogo" />
          </a>
          <a className="mx-3" href="#">
            <img className="sociallogo" src={discordlogo} alt="discordlogo" />
          </a>
          <a className="mx-3 d-none d-sm-inline" href="#">
            <img
              className="sociallogo"
              src={instagramlogo}
              alt="instagramlogo"
            />
          </a>
          <a className="mx-3 d-none d-sm-inline" href="#">
            <img className="sociallogo" src={fblogo} alt="fblogo" />
          </a>
          <a className="mx-3  d-none d-sm-inline" href="#">
            <img className="sociallogo" src={telegramlogo} alt="telegramlogo" />
          </a>
        </div>
        <div className="d-sm-none text-center mt-4">
          <a className="mx-3" href="#">
            <img
              className="sociallogo"
              src={instagramlogo}
              alt="instagramlogo"
            />
          </a>
          <a className="mx-3" href="#">
            <img className="sociallogo" src={fblogo} alt="fblogo" />
          </a>
          <a className="mx-3" href="#">
            <img className="sociallogo" src={telegramlogo} alt="telegramlogo" />
          </a>
        </div>
        <div className="text-center pt-5 mt-5">
          <p className="ff_inter fs_12 text-white pt-4">
            Copyright@2022DeepSpaceBrawl.com
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
