const CHECK_SRC = "WYJ_LION_img/icon_check.png";
const CHECK_EMPTY_SRC = "WYJ_LION_img/icon_check_empty.png";

const keepLoginBtn = document.querySelector(".keep-login-container");
const keepLoginCheckBox = document.querySelector(".keep-login-container img");

const keepLoginClickHandler = () => {
  imgSrc = keepLoginCheckBox.getAttribute("src");
  keepLoginCheckBox.src =
    imgSrc === CHECK_EMPTY_SRC ? CHECK_SRC : CHECK_EMPTY_SRC;

  keepLoginBtn.classList.toggle("color-change");
};

window.onload = () => {
  keepLoginBtn.addEventListener("click", keepLoginClickHandler);
};
