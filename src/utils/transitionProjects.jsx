import { addStyle } from "./projectStyle";

export const transitionProjects = () => {
  let transform = 0;
  let opacity, opacity1;
  const currentScroll = window.pageYOffset;
  const main = document.getElementsByClassName("projectContent")[0].children;
  const height = main[0].clientHeight;

  transform = Math.min(Math.abs(main[0].getBoundingClientRect().top), 25);
  main[0].children[0].style.transform = `translateY(-${Math.min(
    transform,
    25
  )}px)`;

  addStyle();

  if (currentScroll <= Math.ceil(height / 20)) {
    opacity = 1 - currentScroll / (height / 25);
    opacity1 = currentScroll / (height / 10);
  } else {
    opacity = 0;
  }
  main[0].children[0].style.opacity = `${opacity}`;
  main[1].children[0].children[0].style.opacity = `${opacity1}`;

  if (transform === 25) {
    //Opacity
    let opacity2;
    let opacity3;

    if (
      Math.abs(main[1].getBoundingClientRect().top - (height - 25)) <=
      Math.ceil(height / 2)
    ) {
      opacity2 =
        1 -
        Math.abs(main[1].getBoundingClientRect().top - (height - 25)) /
          (height / 2.5);
      opacity3 = Math.min(
        Math.abs(main[1].getBoundingClientRect().top - (height - 25)) /
          (main[1].getBoundingClientRect().height / 5),
        1
      );
    } else {
      opacity2 = 0;
    }
    if (opacity2 <= 0) {
      main[1].children[0].children[0].style.opacity = 0;
    } else {
      main[1].children[0].children[0].style.opacity = `${opacity2}`;
    }
    main[1].children[0].children[1].style.opacity = `${opacity3}`;

    //TranslateY
    main[1].children[0].children[1].style.transform = ` translateY(-${
      Math.ceil(height / 25) +
      Math.abs(main[1].getBoundingClientRect().top - (height - 25))
    }px)`;
  }

  for (let i = 0; i < main.length; i++) {
    if (i >= 1 && i < main.length - 2) {
      if (main[i].children[0].children[1].getBoundingClientRect().top <= 0) {
        //Opacity
        let opacity4, opacity5, opacity6;

        if (
          Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) <=
          Math.ceil(height / 2)
        ) {
          opacity4 =
            1 -
            Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) /
              (height / 2.5);
          opacity5 = Math.min(
            Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) /
              (height / 5),
            1
          );
        } else {
          opacity4 = 0;
        }
        if (opacity4 <= 0) {
          main[i + 1].children[0].children[0].style.opacity = 0;
        } else {
          main[i + 1].children[0].children[0].style.opacity = opacity4;
        }
        opacity6 =
          Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25)) /
            (height / 5) -
          1;
        if (opacity6 <= 1) {
          if (opacity6 <= 0) {
            main[i].children[0].children[1].style.opacity = 0;
          } else {
            main[i].children[0].children[1].style.opacity = `${opacity6}`;
          }
        }
        main[i + 1].children[0].children[1].style.opacity = `${opacity5}`;

        //TranslateY
        main[i + 1].children[0].children[1].style.transform = `translateY(-${
          Math.ceil(height / 25) +
          Math.abs(main[i + 1].getBoundingClientRect().top - (height - 25))
        }px)`;
      }
    } else if (i === main.length - 1) {
      if (
        main[i - 1].children[0].children[1].getBoundingClientRect().top <= 0
      ) {
        //Opacity
        let opacity10;

        opacity10 =
          Math.abs(main[i - 1].getBoundingClientRect().top - (height - 25)) /
            (height / 5) -
          3;
        main[i].children[0].style.opacity = `${Math.min(opacity10, 1)}`;

        if (1 - opacity10 <= 0) {
          main[i - 1].children[0].children[1].style.opacity = 0;
        } else {
          main[i - 1].children[0].children[1].style.opacity = `${
            1 - opacity10
          }`;
        }
      }
    }
  }
};
