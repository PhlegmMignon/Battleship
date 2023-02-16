import { validateAtk } from "./turnControl.js";
const playerFactory = (botOrHuman) => {
  const isHuman = botOrHuman;

  const makeTurn = (gameboard) => {
    let tile = getRandomInt();

    while (validateAtk(tile, gameboard) == false) {
      tile = getRandomInt();
    }
    return tile;

    // return tile;
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  return { isHuman, makeTurn, getRandomInt };
};

export default playerFactory;
