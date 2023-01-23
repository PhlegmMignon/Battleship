import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js";
import playerFactory from "./playerFactory.js";
import gameControl from "./gameControl";

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

// describe("gameboardFactory functions", () => {
//   let shipLocation;
//   let gameboard;
//   let ships = [];
//   let tile;

//   beforeEach(() => {
//     shipLocation = [5, 6, 7, 8];
//     gameboard = gameboardFactory();
//   });

//   it("Checks if ship can be placed through gameboard", () => {
//     let ship = gameboard.placeShip(shipLocation);
//     expect(ship.shipLocation).toEqual([5, 6, 7, 8]);
//   });

//   it("Checks for attack hit", () => {
//     let ship = gameboard.placeShip(shipLocation);
//     ships.push(ship);
//     tile = 5;

//     expect(gameboard.receiveAttack(tile, ships[0])).toBe(true);
//   });

//   it("Checks if misssed shots are saved", () => {
//     let ship = gameboard.placeShip(shipLocation);
//     ships.push(ship);
//     tile = 1;

//     gameboard.receiveAttack(tile, ships[0]);
//     expect(gameboard.missedShots).toEqual([1]);
//   });

//   it("Reports when all ships are sunk", () => {
//     for (let i = 1; i < 6; i++) {
//       shipLocation = [i];
//       let ship = gameboard.placeShip(shipLocation);
//       ships.push(ship);
//       tile = i;

//       gameboard.receiveAttack(tile, ships[i - 1]);
//     }

//     gameboard.allShipsSunk(ships);

//     expect(gameboard.allShipsSunk()).toBe(true);
//   });
// });

// describe("Player factory functions", () => {
//   let player;
//   beforeEach(() => {
//     player = playerFactory(0, false);
//   });

//   it("Valid num 0-99", () => {
//     let tile = player.makeTurn();
//     expect(tile).toBeGreaterThanOrEqual(0);
//     expect(tile).toBeLessThanOrEqual(99);
//   });
// });

describe("Turn control functions", () => {
  let shipLocations = [];
  let player1 = playerFactory(true);
  let player2 = playerFactory(true);
  let p1Ships = [];
  let p2Ships = [];

  beforeEach(() => {
    let counter = 0;
    let gameboard1 = gameboardFactory();
    let gameboard2 = gameboardFactory();
    // shipLocations = [1, 2, 3, 4, 5];
    // gameboard1.placeShip();
    // gameboard2.placeShip();

    // shipLocations = [10, 11, 12, 13];
    // gameboard1.placeShip();
    // gameboard2.placeShip();

    // shipLocations = [20, 21, 22];
    // gameboard1.placeShip();
    // gameboard2.placeShip();

    shipLocations = [30, 31, 32];
    gameboard1.placeShip();
    gameboard2.placeShip();

    shipLocations = [40, 41];
    gameboard1.placeShip();
    gameboard2.placeShip();
  });

  it("Swaps turn after p1 atks", () => {
    player1.makeTurn();
  });
});
