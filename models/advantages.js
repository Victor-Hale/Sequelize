'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class advantages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  advantages.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    advantage_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '优势名称'
    }
  }, {
    sequelize,
    modelName: 'advantages',
    tableName: 'advantages',
    timestamps: false // 该表不需要创建时间和更新时间字段
  });
  return advantages;
};