const makeXYtoggleBtn = () => {
  let btn = document.createElement("div");
  btn.id = "XYtoggle";
  btn.style.width = "100px";
  btn.style.height = "40px";
  btn.style.backgroundColor = "#D3D3D3";
  btn.style.borderRadius = "8px";
  btn.style.display = "inline-flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.value = "x";
  btn.textContent = "X-axis";

  btn.addEventListener("click", () => {
    btn.textContent == "X-axis"
      ? (btn.textContent = "Y-axis")
      : (btn.textContent = "X-axis");
    btn.value == "x" ? (btn.value = "y") : (btn.value = "x");
  });

  return btn;
};

export default makeXYtoggleBtn;
