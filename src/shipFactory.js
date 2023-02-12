const shipFactory = (chosenLocations) => {
  let name;
  //Add name into arguments later cuz it breaks jest.

  let hitLocations = [];

  let shipLocation = chosenLocations;

  const hit = (checkLocation) => {
    if (shipLocation.includes(checkLocation)) {
      // console.log("hit");
      hitLocations.push(checkLocation);
    }
  };

  const isSunk = () => {
    shipLocation.sort();
    hitLocations.sort();

    for (let i = 0; i < shipLocation.length; i++) {
      if (shipLocation[i] != hitLocations[i]) {
        return false;
      }
    }
    return true;
  };
  return { shipLocation, hitLocations, hit, isSunk };
};

export default shipFactory;
