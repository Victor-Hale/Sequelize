'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('status', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      status_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '状态名称'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('status');
  }
};
