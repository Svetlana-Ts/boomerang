'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const gameData = [
      {
        userId: 1,
        score: 10,
      },
      {
        userId: 2,
        score: 20,
      },
    ];
    const games = gameData.map((game) => ({
      ...game,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Games', games);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Games');
  },
};
