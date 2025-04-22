'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.renameColumn('VideoJuegos', 'platfomrs', 'platforms');

  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.renameColumn('VideoJuegos', 'platforms', 'platfomrs');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
