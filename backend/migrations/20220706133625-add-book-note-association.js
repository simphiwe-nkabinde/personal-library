'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //Note belongs to book
    return queryInterface.addColumn(
      'Notes',
      'BookId',
      {
        type: Sequelize.INTGER,
        references: {
          model: 'Books',
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

    //remove Notes belongs to book
    return queryInterface.removeColumn(
      'Notes',
      'BookId'
    );
  }
};
