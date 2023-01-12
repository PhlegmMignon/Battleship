// let ships = require("./shipFactory");
import shipFactory from "./shipFactory.js";

describe("ship functions", () => {
  let ship;

  beforeEach(() => {
    let placements = [2, 3];
    ship = shipFactory(placements);
  });

  it("Checks for placement", () => {
    expect(ship.shipLocation).toEqual([2, 3]);
  });

  // it("Checks for a hit", () => {
  //   ship.hit(2);
  //   expect(ship.hitLocations).toBe([2]);
  // });

  // it("Checks for multiple hits", () => {
  //   ship.hit(2);
  //   ship.hit(3);
  //   expect(ship.hitLocations).toBe([2, 3]);
  // });
});
