'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blog_likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // 关联到 users 表
          key: 'id'
        },
        comment: '点赞人ID'
      },
      blog_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'blogs', // 关联到 blogs 表
          key: 'id'
        },
        comment: '博客ID'
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
    await queryInterface.dropTable('blog_likes');
  }
};
