export const addStyle = () => {
  const main = document.getElementsByClassName("projectContent")[0].children;
  const height = main[0].clientHeight;
  for (let i = 0; i < main.length; i++) {
    if (i !== main.length - 1 && i !== 0) {
      main[i].children[0].children[0].style.transform = `translateY(-${
        (height * 2) / 2
      }px)`;
      main[
        i
      ].children[0].children[1].style.transform = `translateY(-${Math.ceil(
        height / 25
      )}px)`;
      main[i].children[0].children[0].style.opacity = 0;
    } else if (i === main.length - 1) {
      main[i].children[0].style.transform = `translateY(-${height / 2}px)`;
      main[i].children[0].style.opacity = 0;
    }
  }
};

export const removeStyle = () => {
  const main = document.getElementsByClassName("projectContent")[0].children;

  main[0].children[0].removeAttribute("style");
  for (let i = 0; i < main.length; i++) {
    if (i >= 1 && i < main.length - 1) {
      main[i].children[0].children[0].removeAttribute("style");
      main[i].children[0].children[1].removeAttribute("style");
    } else if (i === main.length - 1)
      main[i].children[0].removeAttribute("style");
  }
};
