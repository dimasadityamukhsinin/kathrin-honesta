const checkCursor = () => {
    console.log(window.innerWidth)
  if (window.innerWidth <= 768) {
    document.getElementById("custom_cursor").style.display = "none";
  } else {
    document.getElementById("custom_cursor").removeAttribute("style");
  }
};

export default checkCursor
