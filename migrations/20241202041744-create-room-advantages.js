'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('room_advantages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rooms',
          key: 'id',
        },
        onDelete: 'CASCADE', // 当房源删除时，关联记录也删除
        comment: '房源ID'
      },
      advantage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'advantages',
          key: 'id',
        },
        onDelete: 'CASCADE', // 当优势删除时，关联记录也删除
        comment: '优势ID'
      },
      created_at: {
        type: Sequelize.DATE, // 使用 DATETIME
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: '创建时间'
      },
      updated_at: {
        type: Sequelize.DATE, // 使用 DATETIME
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        comment: '更新时间'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('room_advantages');
  }
};