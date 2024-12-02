'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '博客标识'
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // 关联到 users 表
          key: 'id'
        },
        comment: '用户标识'
      },
      blog_title: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: '博客标题'
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: '博客内容'
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

    // 创建索引
    await queryInterface.addIndex('blogs', ['blog_title'], {
      name: 'blogs_blog_title'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('blogs');
  }
};
