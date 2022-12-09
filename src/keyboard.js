// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  q: (hero) => hero.moveLeft(),
  w: (hero) => hero.attack(),
  e: (hero) => hero.moveRight(),
  // r: () => console.log('r'),
  // t: () => console.log('t'),
  // y: () => console.log('y'),
};

// Какая-то функция.

function runInteractiveConsole(hero) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        keyboard[key.name](hero);
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();
module.exports = runInteractiveConsole;
