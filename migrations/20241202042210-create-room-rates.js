'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room_rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      room_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references: {
          model: 'rooms',
          key: 'id'
        },
        comment: '房源ID'
      },
      rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '评分分数'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: '创建时间'
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: '更新时间'
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('room_rates');
  }
};
