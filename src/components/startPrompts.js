import { isHuman, pickShipLocations } from "../gameControl";

function makeStartPrompt() {
  let prompt = document.createElement("div");
  prompt.id = "prompt";
  prompt.classList.add("prompt");
  prompt.style.display = "flex";
  prompt.style.width = "300px";
  prompt.style.height = "300px";
  prompt.style.flexDirection = "column";

  let header = document.createElement("div");
  header.id = "header";
  header.textContent = "BATTLESHIP";
  header.style.display = "flex";

  let botOrHumanPrompt = document.createElement("div");
  botOrHumanPrompt.id = "botOrHuman";
  botOrHumanPrompt.textContent = "Play against computer or human?";
  botOrHumanPrompt.style.display = "flex";

  let vsBotBtn = document.createElement("button");
  vsBotBtn.id = "vsBotBtn";
  vsBotBtn.textContent = "Bot";
  vsBotBtn.addEventListener("click", () => {
    isHuman(false);
    pickShipLocations();
    prompt.style.display = "none";
  });

  let vsHumanBtn = document.createElement("button");
  vsHumanBtn.id = "vsHumanBtn";
  vsHumanBtn.textContent = "Human";
  vsHumanBtn.addEventListener("click", () => {
    isHuman(true);
    pickShipLocations();
    prompt.style.display = "none";
  });

  prompt.appendChild(header);
  prompt.appendChild(botOrHumanPrompt);
  prompt.appendChild(vsBotBtn);
  prompt.appendChild(vsHumanBtn);

  return prompt;
}

function makeShipLocationsPrompt() {
  let prompt2 = document.createElement("div");
  prompt2.id = "prompt2";
  prompt2.classList.add("prompt");
  prompt2.style.display = "flex";
  prompt2.style.width = "300px";
  prompt2.style.height = "300px";
  prompt2.style.flexDirection = "column";

  let instructions = document.createElement("div");
  instructions.textContent = "Player 1, place your ships";
  instructions.id = "instructions";

  prompt2.appendChild(instructions);

  let element = document.getElementById("element");
  element.appendChild(prompt2);

  return prompt2;
}

export { makeStartPrompt, makeShipLocationsPrompt };
