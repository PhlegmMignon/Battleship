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
  let ship;
  let shipLocation;
  let gameboard;

  beforeEach(() => {
    shipLocation = [5, 6, 7, 8];
    gameboard = gameboardFactory();
  });

  it("Checks if ship can be made", () => {
    gameboard.placeShip(shipLocation);
    expect(ship.shipLocation).toEqual([5, 6, 7, 8]);
  });

  // it("Checks for attack hit", () => {
  //   ship = shipFactory(shipLocation);
  //   let tile = 5;

  //   expect(gameboard.receiveAttack(tile)).toBe(true);
  // });
});
