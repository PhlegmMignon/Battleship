const playerFactory = (enemyGameboard, isHuman) => {
  const makeTurn = () => {
    if (isHuman != true) {
      let tile = getRandomInt();
      console.log(tile);
      return tile;
    }

    return tile;
  };

  const getRandomInt = () => {
    return Math.floor(Math.random() * 100);
  };

  return { makeTurn };
};

module.exports = playerFactory;
