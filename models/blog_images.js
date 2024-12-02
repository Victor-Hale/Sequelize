'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 定义与其他模型的关联
      // blog_images 属于 blogs
      blog_images.belongsTo(models.blogs, {
        foreignKey: 'blog_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 blogs 表中对应博客删除时，自动删除 blog_images 中关联的记录
      });
    }
  }

  blog_images.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '博客ID'
    },
    url: {
      type: DataTypes.JSON,
      allowNull: false,
      comment: '图片链接'
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '更新时间'
    }
  }, {
    sequelize,
    modelName: 'blog_images',
    tableName: 'blog_images',
    timestamps: true // 使用 Sequelize 的时间戳功能（created_at 和 updated_at）
  });

  return blog_images;
};
