'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('blog_images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '主键'
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
      url: {
        type: Sequelize.JSON,
        allowNull: false,
        comment: '图片链接'
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
    await queryInterface.dropTable('blog_images');
  }
};
