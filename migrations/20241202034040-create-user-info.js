'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_info', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '标识'
      },
      user_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references: {
          model: 'users', // 关联到 'users' 表
          key: 'id'       // 关联 'users' 表的 id 字段
        },
        onDelete: 'CASCADE',  // 当 'users' 表中的记录被删除时，自动删除 'user_infos' 中关联的记录
        comment: '关联用户标识'
      },
      user_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '用户昵称，默认用用户邮箱取名'
      },
      user_avatar: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '用户头像图片URL'
      },
      user_profile: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: '用户个人简介'
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
    await queryInterface.dropTable('user_info');
  }
};
