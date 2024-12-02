'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // reviews 属于 users 和 blogs
      reviews.belongsTo(models.users, {
        foreignKey: 'review_user_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 users 表中对应用户删除时，自动删除 reviews 中关联的记录
      });
      reviews.belongsTo(models.blogs, {
        foreignKey: 'blog_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 blogs 表中对应博客删除时，自动删除 reviews 中关联的记录
      });
    }
  }

  reviews.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '评论标识'
    },
    review_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '评论用户标识'
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '被评论博客标识'
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '评论内容'
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
    modelName: 'reviews',
    tableName: 'reviews',
    timestamps: true, // 使用 Sequelize 的时间戳功能（created_at 和 updated_at）
  });

  return reviews;
};
