import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const transition = ({ content, text, image, type }) => {

  function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => content.style.overflow = "visible",
      killScrub = trigger => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
        scrub && scrub.kill();
        trigger.animation.progress(trigger.progress);
      },
      height, isProxyScrolling;

    function onResize() {
      height = content.clientHeight;
      content.style.overflow = "visible"
      document.body.style.height = height + "px";
    }
    onResize();
    ScrollTrigger.addEventListener("refreshInit", onResize);
    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    })
    ScrollTrigger.defaults({ scroller: content });
    ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(content, { y: 0 }, {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: () => height - document.documentElement.clientHeight,
      scrub: smoothness,
      onUpdate: self => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
  }

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      smoothScroll(".content");
      if (type === "projects") {
        if (content.current && text.current && image.current) {
          // Fade out text pertama
          gsap.fromTo(
            content.current.children[0].children[0],
            { opacity: 1 },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: content.current.children[0],
                start: "top 0%",
                end: "bottom 80%",
                scrub: true,
              },
            }
          );

          //fade in text terakhir
          const tlText = gsap.timeline({
            scrollTrigger: {
              trigger:
                content.current.children[content.current.children.length - 1]
                  .children[0],
              start: "top 40%",
              end: "bottom 100%",
              scrub: true,
            },
          });
          tlText
            .from(
              content.current.children[content.current.children.length - 1]
                .children[0],
              {
                opacity: 0,
              }
            )
            .to(
              content.current.children[content.current.children.length - 1]
                .children[0],
              {
                opacity: 1,
              }
            );

          // looping data
          gsap.utils.toArray(image.current).forEach((section, id) => {
            if (id === 0) {
              // fade text title pertama
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: content.current.children[0],
                  start: "top 20%",
                  end: "bottom 30%",
                  scrub: true,
                },
              });
              tl.from(text.current.children[0], {
                opacity: 0,
              })
                .to(text.current.children[0], {
                  opacity: 1,
                })
                .to(text.current.children[0], {
                  opacity: 0,
                });
            } else {
              if (content.current.children[id] && text.current.children[id]) {
                // fade text title
                const tlText = gsap.timeline({
                  scrollTrigger: {
                    trigger: content.current.children[id],
                    start: "top 30%",
                    end: "bottom 30%",
                    scrub: true,
                  },
                });
                tlText
                  .from(text.current.children[id], {
                    opacity: 0,
                  })
                  .to(text.current.children[id], {
                    opacity: 1,
                  })
                  .to(text.current.children[id], {
                    opacity: 0,
                  });
              }
            }

            if (section) {
              // fade image
              const tlImage = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top 70%",
                  end: "bottom 55%",
                  scrub: true,
                },
              });
              tlImage
                .from(section.children[0], {
                  opacity: 0,
                })
                .to(section.children[0], {
                  opacity: 1,
                })
                .to(section.children[0], {
                  opacity: 0,
                });
            }
          });
        }
      } else if (type === "all") {
        if (content.current) {
          // looping data
          gsap.utils.toArray(content.current).forEach((section, id) => {
            if (section) {
              // fade
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  end: "bottom 55%",
                  scrub: true,
                },
              });
              tl.from(section, {
                opacity: 0,
              })
                .to(section, {
                  opacity: 1,
                })
                .to(section, {
                  opacity: 0,
                });
            }
          });
        }
      }
    },
    // mobile
    "(max-width: 767px)": () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });

      document.querySelector("#container").removeAttribute("style");
      document.querySelector(".content").removeAttribute("style");

      if (type === "projects") {
        if (content.current && text.current && image.current) {
          content.current.children[0].children[0].removeAttribute("style");
          for (let i = 0; i < text.current.children.length; i++) {
            text.current.children[i].removeAttribute("style");
          }
          for (let i = 0; i < image.current.length; i++) {
            if (image.current[i]) {
              image.current[i].children[0].removeAttribute("style");
            }
          }
        }
      } else if (type === "all") {
        if (content.current) {
          for (let i = 0; i < content.current.length; i++) {
            if (content.current[i]) {
              content.current[i].removeAttribute("style");
            }
          }
        }
      }
    },
  });
};
