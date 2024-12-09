'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '订单编号'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '用户标识'
      },
      order_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '房源价格'
      },
      order_user_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '预订人姓名'
      },
      order_user_phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '预订人联系电话'
      },
      order_user_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '预订人居住人数'
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '房源标识'
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        comment: '预订开始日期'
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        comment: '预订结束日期'
      },
      order_status_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        comment: '订单状态ID'
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
    await queryInterface.dropTable('orders');
  }
};
