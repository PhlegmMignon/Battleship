import selectBotOrHuman from "../gameControl";

function makeStartPrompt() {
  let prompt = document.createElement("div");
  prompt.id = "prompt";
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
  vsBotBtn.addEventListener("click", () => isHuman(false));

  let vsHumanBtn = document.createElement("button");
  vsHumanBtn.id = "vsHumanBtn";
  vsHumanBtn.textContent = "Human";
  vsBotBtn.addEventListener("click", () => isHuman(true));

  prompt.appendChild(header);
  prompt.appendChild(botOrHumanPrompt);
  prompt.appendChild(vsBotBtn);
  prompt.appendChild(vsHumanBtn);

  return prompt;
}

export default makeStartPrompt;
