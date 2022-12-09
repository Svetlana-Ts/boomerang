const Boomerang = require('./Boomerang');

class Hero {
  constructor(position, enemyPosition) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.enemyPosition = enemyPosition;
  }

  moveLeft() {
    // Идём влево.
    if (this.position > 0) this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    if (this.position < this.enemyPosition) this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang = new Boomerang(this.position, this.enemyPosition);
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }

  win() {
    this.skin = '💃';
    console.log('YOU WIN!💃');
    process.exit();
  }
}

module.exports = Hero;
