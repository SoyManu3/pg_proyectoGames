'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VideoJuegos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      launch_year: {
        type: Sequelize.INTEGER
      },
      platfomrs: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      developers: {
        type: Sequelize.STRING
      },
      modes: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('VideoJuegos');
  }
};