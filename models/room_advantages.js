'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_advantages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      room_advantages.belongsTo(models.rooms, {
        foreignKey: 'room_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 删除房源时，删除关联记录
      });
      room_advantages.belongsTo(models.advantages, {
        foreignKey: 'advantage_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 删除优势时，删除关联记录
      });
    }
  }
  room_advantages.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '房源ID'
    },
    advantage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '优势ID'
    },
    created_at: {
      type: DataTypes.DATE, // 设置为 DATETIME
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE, // 设置为 DATETIME
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '更新时间'
    }
  }, {
    sequelize,
    modelName: 'room_advantages',
    tableName: 'room_advantages',
    timestamps: true
  });
  return room_advantages;
};