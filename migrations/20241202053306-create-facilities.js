'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('facilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      facility_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '设备名称,例如WiFi'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('facilities');
  }
};
