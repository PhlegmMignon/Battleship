import shipFactory from "./shipFactory.js";

const gameboardFactory = () => {
  const missedShots = [];

  const placeShip = (shipLocations) => {
    let ship = shipFactory(shipLocations);
    return ship;
  };

  const receiveAttack = (tile, ship) => {
    // console.log(ship.shipLocation);
    if (ship.shipLocation.includes(tile)) {
      ship.hitLocations.push(tile);
      // console.log(ship.hitLocations);
      return true;
    }

    missedShots.push(tile);
    // console.log(missedShots);
    return false;
  };

  const allShipsSunk = (ships) => {
    for (let i in ships) {
      let ship = ships[i];
      // console.log(ship);
      if (ship.isSunk() != true) {
        return false;
      }
    }
    return true;
  };

  return { missedShots, placeShip, receiveAttack, allShipsSunk };
};

module.exports = gameboardFactory;
