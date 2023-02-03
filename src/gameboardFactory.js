import shipFactory from "./shipFactory.js";

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
        console.log(tile);
        ship.hitLocations.push(tile);

        return true;
      }
    }

    missedShots.push(tile);
    // console.log(missedShots);
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

  return { missedShots, placeShip, receiveAttack, allShipsSunk };
};

export default gameboardFactory;
