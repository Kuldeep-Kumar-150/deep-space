import React from "react";
import { Container } from "react-bootstrap";
import roadmapwhitebg from "../assets/image/svg/roadmap-white-line.svg";
import roadmapdashline from "../assets/image/svg/roadmap-dash-line.svg";
import roadmapastronaut from "../assets/image/webp/roadmapAstronaut.gif";
import roadmapastronaut2 from "../assets/image/webp/roadmapAstronaut2.gif";
import roadmaparrow from "../assets/image/svg/roadmapArrow.svg";
import roadmaparrowleft from "../assets/image/svg/roadmapArrowLeft.svg";
import roadmaptimeline from "../assets/image/webp/roadmapTimeline.png";
import ufo from "../assets/image/webp/ufo-roadmap.png";
import maninspacesuit from "../assets/image/webp/man-in-space-suit-roadmap.png";
import rocket from "../assets/image/webp/rocket.png";
import rocket2 from "../assets/image/webp/rocket2.png";

const Roadmap = () => {
  return (
    <section className="py-5 roadmap-bg position-relative"id="HOME">
      <img
        width={323}
        height={460}
        className="rocket-roadmap d-none d-xl-block"
        src={rocket}
        alt="rocket"
      />
      <img
        width={244}
        height={240}
        className="roadmapufo d-none d-xl-block"
        src={ufo}
        alt="ufo"
      />
      <img
        width={288}
        height={177}
        className="man-in-space-suit-roadmap d-none d-xl-block"
        src={maninspacesuit}
        alt="man-in-space-suit-roadmap"
      />
      <img
        width={288}
        height={411}
        className="rocket-roadmap-2 d-none d-lg-block"
        src={rocket2}
        alt="rocket"
      />
      <Container className="pb-5 pb-lg-0">
        <div className="text-center pb-5">
          <h2 className="text-white fs_70 ff_grandlander">Roadmap</h2>
        </div>
        <div className="mt-lg-5 pt-lg-5">
          <div className="text-lg-center position-relative d-none d-lg-block">
            <img
              className="roadmapwhitebg"
              src={roadmapwhitebg}
              alt="timeLine"
            />
            <div>
              <img
                className="roadmapdashline"
                src={roadmapdashline}
                alt="timeLine"
              />
            </div>
            <div>
              <div className="roadmap-astronaut-bg roadmap-astronauts-bg d-flex align-items-center justify-content-center">
                <img
                  className="roadmapastronaut"
                  src={roadmapastronaut}
                  alt="Astronaut"
                />
              </div>
              <img className="roadmaparrow" src={roadmaparrow} alt="arrow" />
              <div className="phase-1 text-start">
                <h2 className="ff-mandali fs_32 text-white mb-1">Phase 1</h2>
                <p className="mb-0 text-white fs_16 ff_grandlander">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <div className="roadmap-astronaut-bg-2 roadmap-astronauts-bg d-flex align-items-center justify-content-center">
                <img
                  className="roadmapastronaut2"
                  src={roadmapastronaut2}
                  alt="Astronaut"
                />
              </div>
              <img className="roadmaparrow2" src={roadmaparrow} alt="arrow" />
            </div>
            <div className="phase-2-5 phase-2 text-end">
              <h2 className="ff-mandali fs_32 text-white mb-1">Phase 2</h2>
              <p className="mb-0 text-white fs_16 ff_grandlander">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                risus fermentum.
              </p>
            </div>
            <div>
              <div className="roadmap-astronaut-bg-3 roadmap-astronauts-bg d-flex align-items-center justify-content-center">
                <img
                  className="roadmapastronaut"
                  src={roadmapastronaut}
                  alt="Astronaut"
                />
              </div>
              <img className="roadmaparrow3" src={roadmaparrow} alt="arrow" />
              <div className="phase-2-5 phase-3 text-start">
                <h2 className="ff-mandali fs_32 text-white mb-1">Phase 3</h2>
                <p className="mb-0 text-white fs_16 ff_grandlander">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <div className="roadmap-astronaut-bg-4 roadmap-astronauts-bg d-flex align-items-center justify-content-center">
                <img
                  className="roadmapastronaut2"
                  src={roadmapastronaut2}
                  alt="Astronaut"
                />
              </div>
              <img
                className="roadmaparrowleft2"
                src={roadmaparrowleft}
                alt="arrow"
              />
              <div className="phase-2-5 phase-4 text-end">
                <h2 className="ff-mandali fs_32 text-white mb-1">Phase 4</h2>
                <p className="mb-0 text-white fs_16 ff_grandlander">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
            <div>
              <div className="roadmap-astronaut-bg-5 roadmap-astronauts-bg d-flex align-items-center justify-content-center">
                <img
                  className="roadmapastronaut"
                  src={roadmapastronaut}
                  alt="Astronaut"
                />
              </div>
              <img
                className="roadmaparrowleft"
                src={roadmaparrowleft}
                alt="arrow"
              />
              <div className="phase-2-5 phase-5 text-start">
                <h2 className="ff-mandali fs_32 text-white mb-1">Phase 5</h2>
                <p className="mb-0 text-white fs_16 ff_grandlander">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  risus fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline position-relative d-lg-none">
          <div className="timeline_item left position-relative dot">
            <div className="box pb-5 ps-5">
              <h2 className="ff-mandali fs_32 text-white mb-3">Phase 1</h2>
              <p className="mb-0 text-white fs_16 ff_grandlander">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
          </div>
          <div className="timeline_item right position-relative dot">
            <div className="box pb-5 ps-5">
              <h2 className="ff-mandali fs_32 text-white mb-3">Phase 2</h2>
              <p className="mb-0 text-white fs_16 ff_grandlander">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                risus fermentum.
              </p>
            </div>
          </div>
          <div className="timeline_item left position-relative dot">
            <div className="box pb-5 ps-5">
              <h2 className="ff-mandali fs_32 text-white mb-3">Phase 3</h2>
              <p className="mb-0 text-white fs_16 ff_grandlander">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                risus fermentum.
              </p>
            </div>
          </div>
          <div className="timeline_item right position-relative dot">
            <div className="box pb-5 ps-5">
              <h2 className="ff-mandali fs_32 text-white mb-3">Phase 4</h2>
              <p className="mb-0 text-white fs_16 ff_grandlander">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                risus fermentum.
              </p>
            </div>
          </div>
        </div>
        <div className="timeline_item right position-relative dot d-lg-none">
          <div className="box pb-3 ps-5">
            <h2 className="ff-mandali fs_32 text-white mb-3">Phase 5</h2>
            <p className="mb-0 text-white fs_16 ff_grandlander">
              Venenatis scelerisque sit cras amet risus mattis. Dignissim risus
              fermentum.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
