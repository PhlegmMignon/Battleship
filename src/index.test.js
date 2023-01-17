import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js";

// describe("ship functions", () => {
//   let ship;

//   beforeEach(() => {
//     let placements = [2, 3];
//     ship = shipFactory(placements);
//   });

//   it("Checks for placement", () => {
//     expect(ship.shipLocation).toEqual([2, 3]);
//   });

//   it("Checks for a hit", () => {
//     ship.hit(2);
//     expect(ship.hitLocations).toEqual([2]);
//   });

//   it("Checks for multiple hits", () => {
//     ship.hit(3);
//     ship.hit(2);
//     expect(ship.hitLocations).toEqual([3, 2]);
//   });

//   it("Checks if ship can be sunk", () => {
//     ship.hit(3);
//     ship.hit(2);

//     expect(ship.isSunk()).toBe(true);
//   });
// });

describe("gameboardFactory functions", () => {
  let shipLocation;
  let gameboard;
  let ships = [];
  let tile;

  beforeEach(() => {
    shipLocation = [5, 6, 7, 8];
    gameboard = gameboardFactory();
  });

  it("Checks if ship can be placed through gameboard", () => {
    let ship = gameboard.placeShip(shipLocation);
    expect(ship.shipLocation).toEqual([5, 6, 7, 8]);
  });

  it("Checks for attack hit", () => {
    let ship = gameboard.placeShip(shipLocation);
    ships.push(ship);
    tile = 5;

    expect(gameboard.receiveAttack(tile, ships[0])).toBe(true);
  });

  it("Checks if misssed shots are saved", () => {
    let ship = gameboard.placeShip(shipLocation);
    ships.push(ship);
    tile = 1;

    gameboard.receiveAttack(tile, ships[0]);
    expect(gameboard.missedShots).toEqual([1]);
  });

  it("Reports when all ships are sunk", () => {
    for (let i = 1; i < 6; i++) {
      shipLocation = [i];
      let ship = gameboard.placeShip(shipLocation);
      ships.push(ship);
      tile = i;

      gameboard.receiveAttack(tile, ships[i - 1]);
    }

    gameboard.allShipsSunk(ships);

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
