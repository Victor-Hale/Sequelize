'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '房源编号'
      },
      merchants_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references: {
          model: 'merchants', // 关联到 merchants 表
          key: 'id'           // 关联 merchants 表的 id 字段
        },
        onDelete: 'CASCADE',  // 当商家删除时，自动删除房源
        comment: '关联商家标识'
      },
      room_title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '房源名称'
      },
      position: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: '房源地址'
      },
      room_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '房源类型ID'
      },
      room_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '房源价格'
      },
      room_intro: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: '房源简介'
      },
      room_introduce: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: '房源详细介绍'
      },
      room_notice: {
        type: Sequelize.TEXT,
        allowNull: true,
        comment: '房源注意事项'
      },
      people_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        comment: '房源最大入住人数'
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
    await queryInterface.addIndex('rooms', ['room_title'], {
      name: 'rooms_room_title'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};