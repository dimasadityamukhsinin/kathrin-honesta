import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register Plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const transition = ({ content, text, image, type }) => {
  if (type === "projects") {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
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
                content.current.children[content.current.children.length - 2]
                  .children[0],
              start: "top 40%",
              end: "bottom 100%",
              scrub: true,
            },
          });
          tlText
            .from(
              content.current.children[content.current.children.length - 2]
                .children[0],
              {
                opacity: 0,
              }
            )
            .to(
              content.current.children[content.current.children.length - 2]
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
              // fade text title
              const tlText = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
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
          });
        }
      },
      // mobile
      "(max-width: 767px)": () =>
        ScrollTrigger.getAll().forEach((t) => {
          t.kill();
        }),
    });
  } else if (type === "all") {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        if (content.current) {
          // looping data
          gsap.utils.toArray(content.current).forEach((section, id) => {
            if (id === 0) {
              // fade
              gsap.fromTo(
                section,
                { opacity: 1 },
                {
                  opacity: 0,
                  scrollTrigger: {
                    trigger: section,
                    start: "top 0%",
                    end: "bottom 30%",
                    scrub: true,
                  },
                }
              );
            } else {
              // fade
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: section,
                  start: "top 70%",
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
      },
      // mobile
      "(max-width: 767px)": () =>
        ScrollTrigger.getAll().forEach((t) => {
          t.kill();
        }),
    });
  }
};
