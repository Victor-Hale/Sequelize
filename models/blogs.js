'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 定义与其他模型的关联
      // blogs 属于 users
      blogs.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 users 表中对应用户删除时，自动删除 blogs 中关联的记录
      });
    }
  }

  blogs.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '博客标识'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '用户标识'
    },
    blog_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '博客标题'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '博客内容'
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
    modelName: 'blogs',
    tableName: 'blogs',
    timestamps: true, // 使用 Sequelize 的时间戳功能（created_at 和 updated_at）
    indexes: [{
      fields: ['blog_title'],  // 创建索引
      name: 'blogs_blog_title'
    }]
  });

  return blogs;
};
