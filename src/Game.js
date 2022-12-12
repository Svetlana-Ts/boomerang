// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.



class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.enemy = new Enemy(29, 0);
    this.boomerang = new Boomerang();
    this.hero = new Hero(0, this.enemy.position); // Герою можно аргументом передать бумеранг.
    this.view = new View();
    this.track = [];
    this.regenerateTrack();

    this.scores = 0;
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных()
    // runInteractiveConsole(this.hero);

    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (this.hero.boomerang) this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    if (this.hero.boomerang) this.hero.boomerang.fly();
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang) {
      if (this.hero.boomerang.position === this.enemy.position) {
        this.scores += 1;
        this.enemy.die();
        this.hero.boomerang.direction = false;
      }
    }
    if (this.scores > 10) this.hero.win();
  }

  play() {
    runInteractiveConsole(this.hero);
    setInterval(() => {
      this.enemy.moveLeft();
    }, 100);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();

      this.view.render(this.track, this.scores);
    }, 50);
  }
}
module.exports = Game;
