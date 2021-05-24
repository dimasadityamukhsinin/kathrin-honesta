import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import anime from "animejs";

// COMPONENTS
import { InViewClass } from "../utils/inview";
import { titleAnimationOptions, imageAnimationOptions } from "./animSettings";
import { StaticImage } from "gatsby-plugin-image";
// import { mediaWidth, windowMatchMedia } from "utils/mediaTreshold";

const ProjectSection = ({ link, title, image }) => {
  const inviewCompRef = useRef();
  const imageCompRef = useRef();
  const inviewFuncRef = useRef();
  const titleCompRef = useRef();

  useEffect(() => {
    if (!inviewFuncRef.current) {
      // Initialize Image Animation
      const animeImage = anime({
        targets: imageCompRef.current,
        ...imageAnimationOptions,
      });

      animeImage.pause();

      // Initialize Text Animation
      const animeTitle = anime({
        targets: titleCompRef.current,
        ...titleAnimationOptions,
      });

      animeTitle.pause();

      // INIT Inview Functions
      inviewFuncRef.current = new InViewClass({
        target: inviewCompRef.current,
        visibility: 0.55,
        resizeTick: true,
        enter: () => {
          // console.log('enter');
        },
        always: (value) => {
          // console.log('scroll project');
          //   if (!windowMatchMedia.mobile()) {
          const progressForImage =
            (1 +
              value.percentCenterHeight({
                speed: 1,
                buffer: 0,
              })) /
            2;

          animeImage.seek(Math.round(animeImage.duration * progressForImage));

          const progressForTitle =
            (1 +
              value.percentCenterHeight({
                speed: 1,
                buffer: 0,
              })) /
            2;
          if (progressForTitle === 0) {
            animeTitle.seek(1);
          } else if (progressForTitle === 1) {
            animeTitle.seek(animeTitle.duration - 1);
          } else {
            animeTitle.seek(Math.round(animeTitle.duration * progressForTitle));
          }
          //   } else {
          //     animeImage.pause();
          //     animeTitle.pause();
          //     imageCompRef.current.style = {};
          //     titleCompRef.current.style = {};
          //   }
        },
        exit: () => {
          // console.log('exit');
        },
      });
    }

    return () => {
      if (inviewFuncRef.current && inviewFuncRef.current.kill) {
        inviewFuncRef.current.kill();
        inviewFuncRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={inviewCompRef}>
      <Link to="/">
        <div>
          <span ref={titleCompRef}>{title}</span>
        </div>
        <div ref={imageCompRef}>
          <StaticImage
            src={image}
            alt="Jessica Watson"
            placeholder="blurred"
            loading="eager"
            objectFit="contain"
            style={{ maxHeight: "100%" }}
          />
        </div>
      </Link>
    </div>
    // <section
    //   ref={inviewCompRef}
    //   id={`section${props.sectionId}`}
    //   className="project_container"
    // >
    //   <div
    //     className={`projectImageAnimation ${imageRatioState}`}
    //     ref={imageCompRef}
    //   >
    //     <Link to="/" {...context.cursorHover.current}>
    //       <ImgParser
    //         imgStyle={{
    //           WebkitUserDrag: "none",
    //           objectFit: "contain",
    //           width: "100%",
    //           height: "100%",
    //         }}
    //         style={{ maxHeight: "100%" }}
    //         loading="eager"
    //         objectFit="contain"
    //         draggable={false}
    //         afterLoad={({ ratio }) => {
    //           console.log(ratio);
    //           setRatioState(ratio);
    //         }}
    //         imgPublicURL={props.imgPublicURL}
    //       />
    //     </Link>
    //   </div>
    // </section>
  );
};

ProjectSection.propTypes = {
  sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProjectSection;
