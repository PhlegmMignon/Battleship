let ships = require("./index");

let ship;

beforeEach(() => {
  ship = shipFactory(2);
  ship.positions = [2, 3];
});

it("Checks for a hit", () => {
  ship.hit(2);
  expect(ship.hitLocations).toBe([2]);
});

it("Checks for multiple hits", () => {
  ship.hit(2);
  ship.hit(3);
  expect(ship.hitLocations).toBe([2, 3]);
});
