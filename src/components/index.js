import "./style.css";
import shipFactory from "../shipFactory.js";
import gameboardFactory from "../gameboardFactory.js";
import makeStartPrompt from "./startPrompts";

function component() {
  let element = document.createElement("div");
  element.id = "element";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";

  let prompt = makeStartPrompt();
  //Make grid

  element.appendChild(prompt);
  return element;
}

document.body.appendChild(component());
