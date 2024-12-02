'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('advantages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      advantage_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '优势名称'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('advantages');
  }
};