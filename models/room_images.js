'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 在这里定义与其他模型的关联
      room_images.belongsTo(models.rooms, {
        foreignKey: 'room_id',
        targetKey: 'id',
        onDelete: 'CASCADE' // 当 rooms 表中的记录被删除时，自动删除 room_images 中的关联记录
      });
    }
  }

  room_images.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '主键'
    },
    room_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: '房源ID'
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '图片链接'
    },
    created_at: {
      type: DataTypes.DATE, // 使用 DATETIME 类型
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE, // 使用 DATETIME 类型
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: '更新时间'
    }
  }, {
    sequelize,
    modelName: 'room_images',
    tableName: 'room_images',
    timestamps: false  // 如果没有 created_at 和 updated_at 字段，设置为 false
  });

  return room_images;
};
