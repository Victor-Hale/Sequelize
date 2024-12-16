'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('merchants', {
     id: {
        allowNull: false,
        autoIncrement: true, //自增
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '商家标识'
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        comment: '商家邮箱，账号'
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '商家登录密码'
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: '状态'
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
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('merchants');
  }
};