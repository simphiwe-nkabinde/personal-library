'use strict';

const sequelize = require("sequelize");


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //Book belongs to user
    return queryInterface.addColumn(
      'Books', 
      'UserId',
      {
        type: sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    //remove book belongs to user
    return queryInterface.removeColumn(
      'Books', 
      'UserId',
    );
  }
};
