'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 在这里定义与其他模型的关联
    }
  }

  category.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '类型名称'
    }
  }, {
    sequelize,
    modelName: 'category',
    tableName: 'category',
    timestamps: false  // 如果没有 created_at 和 updated_at 字段，设置为 false
  });
  return category;
};
