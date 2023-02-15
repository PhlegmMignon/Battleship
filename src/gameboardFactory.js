import shipFactory from "./shipFactory.js";
import { addHitColor, addMissedColor } from "./addTileColor.js";

const gameboardFactory = () => {
  const missedShots = [];
  let playerShips = [];

  const placeShip = (shipLocations) => {
    let ship = shipFactory(shipLocations);
    playerShips.push(ship);
    return ship;
  };

  const receiveAttack = (tile) => {
    for (let i = 0; i < 5; i++) {
      let ship = playerShips[i];
      if (ship.shipLocation.includes(tile)) {
        // console.log(tile);
        ship.hitLocations.push(tile);

        return true;
      }
    }

    missedShots.push(tile);
    // addMissedColor(tile);
    return false;
  };

  const allShipsSunk = () => {
    for (let i in playerShips) {
      let ship = playerShips[i];
      if (ship.isSunk() != true) {
        return false;
      }
    }
    return true;
  };

  return { playerShips, missedShots, placeShip, receiveAttack, allShipsSunk };
};

export default gameboardFactory;
