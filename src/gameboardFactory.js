import shipFactory from "./shipFactory.js";

const gameboardFactory = () => {
  let ships = [];
  let shipLengths = [2, 3, 3, 4, 5];

  //   for (let i = 0; shipLengths[i] != null; i++) {
  //     let shipLocation;
  //     ships[i] = shipFactory(shipLocation);
  //     console.log(ships[0]);
  //   }
  const placeShip = (shipLocations) => {
    let ship = shipFactory(shipLocations);
    return ship;
  };

  const receiveAttack = (tile, ship) => {
    if (ship.shipLocation.includes(tile)) {
      ship.hitLocations.push(tile);
      // console.log(ship.hitLocations);
      return true;
    }

    return false;
  };

  return { ships, placeShip, receiveAttack };
};

module.exports = gameboardFactory;
