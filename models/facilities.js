'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 在这里定义与其他模型的关联
    }
  }

  facilities.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    facility_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '设备名称,例如WiFi'
    }
  }, {
    sequelize,
    modelName: 'facilities',
    tableName: 'facilities',
    timestamps: false  // 如果没有 created_at 和 updated_at 字段，设置为 false
  });

  return facilities;
};
