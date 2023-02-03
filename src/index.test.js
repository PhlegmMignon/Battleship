import shipFactory from "./shipFactory.js";
import gameboardFactory from "./gameboardFactory.js";
import playerFactory from "./playerFactory.js";
import gameControl from "./gameControl";
import { turnControl, checkValidity } from "./turnControl";

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
//     gameboard = gameboardFactory();

//     let ship = gameboard.placeShip([11, 12, 13, 14, 15]);
//     ship = gameboard.placeShip([31, 32, 33]);
//     ship = gameboard.placeShip([41, 42, 43]);
//     ship = gameboard.placeShip([51, 52]);
//     //The battleship will be placed by the function.
//   });

//   it("Checks if ship can be placed through gameboard", () => {
//     shipLocation = [5, 6, 7, 8];

//     let ship = gameboard.placeShip(shipLocation);
//     expect(ship.shipLocation).toEqual([5, 6, 7, 8]);
//   });

//   it("Checks for attack hit", () => {
//     shipLocation = [5, 6, 7, 8];
//     let ship = gameboard.placeShip(shipLocation);

//     tile = 5;

//     expect(gameboard.receiveAttack(tile)).toBe(true);
//   });

//   it("Checks if misssed shots are saved", () => {
//     shipLocation = [5, 6, 7, 8];

//     let ship = gameboard.placeShip(shipLocation);
//     ships.push(ship);
//     tile = 1;

//     gameboard.receiveAttack(tile);
//     expect(gameboard.missedShots).toEqual([1]);
//   });

//   it("Reports when all ships are sunk", () => {
//     shipLocation = [5, 6, 7, 8];
//     let ship = gameboard.placeShip(shipLocation);

//     let allShipLocations = [
//       5, 6, 7, 8, 11, 12, 13, 14, 15, 31, 32, 33, 41, 42, 43, 51, 52,
//     ];
//     for (let i in allShipLocations) {
//       let tile = allShipLocations[i];
//       // console.log(tile);
//       gameboard.receiveAttack(tile);
//     }

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

//Prob won't be using this
// describe("Check placement validity", () => {
//   let tile;
//   let ship;
//   let shipArray;
//   let shipLength = 5;
//   let XYtoggle = "x";
//   let gameboard = gameboardFactory();

//   beforeEach(() => {
//     shipLocation = [5, 6, 7, 8];
//     ship = gameboard.placeShip(shipLocation);
//     shipArray.push(ship);
//   });

//   expect(checkValidity(tile, shipLength, shipArray, XYtoggle).toBe(true));
// });

// describe("Turn control functions", () => {
//   let shipLocations = [];
//   let player1 = playerFactory(true);
//   let player2 = playerFactory(true);
//   let p1Ships = [];
//   let p2Ships = [];

//   beforeEach(() => {
//     let counter = 0;
//     let gameboard1 = gameboardFactory();
//     let gameboard2 = gameboardFactory();
//     // shipLocations = [1, 2, 3, 4, 5];
//     // gameboard1.placeShip();
//     // gameboard2.placeShip();

//     // shipLocations = [10, 11, 12, 13];
//     // gameboard1.placeShip();
//     // gameboard2.placeShip();

//     // shipLocations = [20, 21, 22];
//     // gameboard1.placeShip();
//     // gameboard2.placeShip();

//     shipLocations = [30, 31, 32];
//     gameboard1.placeShip();
//     gameboard2.placeShip();

//     shipLocations = [40, 41];
//     gameboard1.placeShip();
//     gameboard2.placeShip();
//   });

//   it("Swaps turn after p1 atks", () => {
//     player1.makeTurn();
//   });
// });
