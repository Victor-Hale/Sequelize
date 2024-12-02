'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('category', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      category_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '类型名称'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('category');
  }
};
