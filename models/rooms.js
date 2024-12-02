'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rooms.belongsTo(models.merchants, {
        foreignKey: 'merchants_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当商家删除时，自动删除房源
      });
    }
  }
  rooms.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '房源编号'
    },
    merchants_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'merchants', // 关联到 merchants 表
        key: 'id'           // 关联 merchants 表的 id 字段
      },
      onDelete: 'CASCADE', // 当商家删除时，自动删除房源
      comment: '关联商家标识'
    },
    room_title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '房源名称'
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: '房源地址'
    },
    room_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '房源类型ID'
    },
    room_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '房源价格'
    },
    room_intro: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '房源简介'
    },
    room_introduce: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '房源详细介绍'
    },
    room_notice: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: '房源注意事项'
    },
    people_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '房源最大入住人数'
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
    modelName: 'rooms',
    tableName: 'rooms',
    timestamps: true,
    indexes: [{
      fields: ['room_title'],  // 创建索引
      name: 'rooms_room_title'
    }]
  });
  return rooms;
};