'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '评论标识'
      },
      review_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // 关联到 users 表
          key: 'id'
        },
        comment: '评论用户标识'
      },
      blog_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'blogs', // 关联到 blogs 表
          key: 'id'
        },
        comment: '被评论博客标识'
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: '评论内容'
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
    await queryInterface.dropTable('reviews');
  }
};
