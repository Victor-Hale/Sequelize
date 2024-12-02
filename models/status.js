'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 定义与其他模型的关联
      // 如果有与其他表的关联关系，可以在这里定义
    }
  }

  status.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    status_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '状态名称'
    }
  }, {
    sequelize,
    modelName: 'status',
    tableName: 'status',
    timestamps: false // 该表没有 createdAt 和 updatedAt 字段
  });

  return status;
};
