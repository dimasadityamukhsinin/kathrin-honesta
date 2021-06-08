const checkCursor = () => {
  if (window.innerWidth <= 768) {
    document.getElementsByClassName("custom_cursor")[0].style.display = "none";
  } else {
    document.getElementsByClassName("custom_cursor")[0].removeAttribute("style");
  }
};

export default checkCursor
