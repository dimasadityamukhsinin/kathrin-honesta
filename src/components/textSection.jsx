import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

// COMPONENTS
import {
  titleAnimationOptions,
  mobileContAnimOptions,
} from "./animSettings";
import { InViewClass } from "../utils/inview";

const TextSection = ({ content }) => {
  const inviewCompRef = useRef();
  const inviewFuncRef = useRef();
  const titleCompRef = useRef();
  const mobileContRef = useRef();

  useEffect(() => {
    // Initiate UseEffect when Inview is not defined and SmoothScrollbar is Defined
    if (!inviewFuncRef.current) {
      // Initialize Text Animation
      const animeTitle = anime({
        targets: titleCompRef.current,
        ...titleAnimationOptions,
      });

      animeTitle.pause();

      // Initialize Mobile Content Animation
      const animeMobileCont = anime({
        targets: mobileContRef.current,
        ...mobileContAnimOptions,
      });

      animeMobileCont.pause();

      // INIT Inview Functions
      inviewFuncRef.current = new InViewClass({
        target: inviewCompRef.current,
        visibility: 0.55,
        resizeTick: true,
        always: (value) => {
          const progressForTitle =
            (1 +
              value.percentCenterHeight({
                speed: 1,
                buffer: 0,
              })) /
            2;

          animeTitle.seek(Math.round(animeTitle.duration * progressForTitle));

          //   if (props.displayMobile) {
          //     const progressForMobileCont =
          //       (1 +
          //         value.percentCenterHeight({
          //           speed: 0.5,
          //           buffer: 0,
          //         })) /
          //       2;
          //     animeMobileCont.seek(
          //       Math.round(animeMobileCont.duration * progressForMobileCont)
          //     );
          //   } else {
          //     if (mobileContRef.current) mobileContRef.current.style = {};
          //   }
        },
      });
    }
  }, []);

  // Component Unmount
  useEffect(() => {
    return () => {
      if (inviewFuncRef.current) {
        inviewFuncRef.current.kill();
        inviewFuncRef.current = null;
      }
    };
  }, []);
  return (
    <div ref={inviewCompRef}>
      <p ref={titleCompRef}>{content}</p>
    </div>
    // <section
    //   ref={inviewCompRef}
    //   id={`section${props.sectionId ? props.sectionId : ''}`}
    //   className={`text_container ${props.className ? props.className : ''}`}
    // >
    //   <LayoutPortal position='front'>
    //     <aside
    //       className={`float_title ${props.className ? props.className : ''}`}
    //     >
    //       <div className='portal' ref={titleCompRef}>
    //         {props.children}
    //       </div>
    //     </aside>
    //   </LayoutPortal>

    //   {props.opening && (
    //     <div className={`content`}>
    //       <div ref={mobileContRef}>{props.children}</div>
    //     </div>
    //   )}
    //   {props.ending && <BackToTop className='backToTop'>Back to Top</BackToTop>}
    // </section>
  );
};

TextSection.propTypes = {
  sectionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TextSection;
