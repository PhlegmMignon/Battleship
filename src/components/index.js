import "./style.css";
import shipFactory from "../shipFactory.js";
import gameboardFactory from "../gameboardFactory.js";
import { makeStartPrompt, makeShipLocationsPrompt } from "./startPrompts";
import makeGameboard from "./gameboardDOM";

function component() {
  let element = document.createElement("div");
  element.id = "element";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";

  element.appendChild(makeStartPrompt());
  return element;
}

document.body.appendChild(component());
