// Сделаем отдельный класс для отображения игры в консоли.
// const Game = require('./Game');

// const game = new Game({ trackLength: 30 });

class View {
  constructor(game) {
    this.game = game;
  }

  render(args, scores) {
    const yourTeamName = "Elbrus";

    // Тут всё рисуем.
    if (process.argv[2]) {
      console.log(`Имя игрока: ${process.argv[2]}`);
    }
    console.log("\n");
    console.log(args.join(""));
    console.log("\n\n");
    console.log(`Your scores: ${scores}`);
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
