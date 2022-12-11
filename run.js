// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
// const { sequelize } = require('./db/models');

const { Result } = require('./db/models');

const curPlayerName = process.argv[2];

const startGame = async (curPlayerName = 'user') => {
  try {
    const [curPlayer] = await Result.findOrCreate({
      where: { player: curPlayerName },
      defaults: {
        player: curPlayerName,
        score: 0,
      },
    });
    const trackLength = 30;
    const heroId = curPlayer.get().id;
    const heroName = curPlayer.get().player;
    const heroScore = curPlayer.get().score;
    console.log(heroName);
    const game = new Game(trackLength, heroId, heroName, heroScore);
    game.play();
  } catch (error) {
    console.log(error);
  }
};
// Запуск игры.
startGame(curPlayerName);
