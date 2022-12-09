// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(begin, end) {
    this.skin = '🌀';
    this.position = begin + 1;
    this.begin = begin;
    this.end = end;
    this.direction = true;

  }

  fly() {
    if (this.direction) {
      this.moveRight();
    } else {
      this.skin = "";
      this.position = 30;
    }
  }

  // moveLeft() {
  //   // Идём влево.
  //   this.position -= 1;this.moveRight();
  //   this.moveLeft();
  // }

  moveRight() {
    // Идём вправо.
    if (this.position < this.end) this.position += 1;
  }
}

module.exports = Boomerang;
