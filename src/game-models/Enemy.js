// Враг.

class Enemy {
  constructor(position, heroPosition) {
    this.generateSkin();
    this.position = position;
    this.heroPosition = heroPosition;
  }

  generateSkin() {
    const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    if (this.position > this.heroPosition) this.position -= 1;
  }

  die() {
    this.position = 29
    this.skin = '💀';
    console.log('Enemy is dead!');
    this.generateSkin();
  }
}

module.exports = Enemy;
