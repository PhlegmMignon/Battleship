const XYtoggleBtn = () => {
  let btn = document.createElement("div");
  btn.style.width = "100px";
  btn.style.height = "40px";

  btn.addEventListener("click", () => {
    btn.textContent == "X-axis"
      ? (btn.textContent = "Y-axis")
      : (btn.textContent = "X-axis");
    btn.value == "x" ? (btn.value = "y") : (btn.value = "x");
  });
};

export default XYtoggleBtn;
