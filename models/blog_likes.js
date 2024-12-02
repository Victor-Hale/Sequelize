'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog_likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // blog_likes 属于 users 和 blogs
      blog_likes.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 users 表中对应用户删除时，自动删除 blog_likes 中关联的记录
      });
      blog_likes.belongsTo(models.blogs, {
        foreignKey: 'blog_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 blogs 表中对应博客删除时，自动删除 blog_likes 中关联的记录
      });
    }
  }

  blog_likes.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '点赞人ID'
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '博客ID'
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
    modelName: 'blog_likes',
    tableName: 'blog_likes',
    timestamps: true // 使用 Sequelize 的时间戳功能（created_at 和 updated_at）
  });

  return blog_likes;
};
