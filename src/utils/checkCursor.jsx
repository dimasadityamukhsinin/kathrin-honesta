const checkCursor = () => {
  if (window.innerWidth <= 576) {
    document.getElementById("custom_cursor").style.display = "none";
  } else {
    document.getElementById("custom_cursor").removeAttribute("style");
  }
};

export default checkCursor
