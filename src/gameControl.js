import playerFactory from "./playerFactory";
import makeGameboard from "./components/gameboardDOM";
import { makeShipLocationsPrompt } from "./components/startPrompts";

// let player1 = playerFactory(gameboard1, true);
// let player2;

let vsHuman;
const isHuman = (boolean) => {
  vsHuman = boolean;
};

const pickShipLocations = () => {
  let setupGameboard1 = makeGameboard();

  let prompt = makeShipLocationsPrompt();
  prompt.appendChild(setupGameboard1);
};

const selectBotOrHuman = (isHuman) => {
  if (isHuman == false) {
    // player2 = playerFactory(gameboard2, false);
  }
};

export { isHuman, pickShipLocations };
