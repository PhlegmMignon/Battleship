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

  const receiveAttack = (tile, ships) => {
    console.log(ships);
    for (ship in ships) {
      // console.log(ship);

      if (ship.shipLocation.includes(tile)) {
        return true;
      }

      //   for (location in ship.shipLocation) {
      //     if (tile == location) {
      //       console.log("hit");
      //     }
      //   }
    }
  };

  return { ships, placeShip, receiveAttack };
};

module.exports = gameboardFactory;
