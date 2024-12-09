'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 定义与其他模型的关联
      orders.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 users 表中的用户删除时，自动删除该订单
      });
      orders.belongsTo(models.rooms, {
        foreignKey: 'room_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 rooms 表中的房源删除时，自动删除该订单
      });
      // 如果有订单状态表，可以在这里关联
      orders.belongsTo(models.order_statuses, {
        foreignKey: 'order_status_id',
        targetKey: 'id',
        onDelete: 'SET NULL', // 如果订单状态删除，订单状态设置为 null
      });
    }
  }

  orders.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '订单编号'
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '用户标识'
    },
    order_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: '房源价格'
    },
    order_user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '预订人姓名'
    },
    order_user_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '预订人联系电话'
    },
    order_user_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '预订人居住人数'
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '房源标识'
    },
    start_date: {
      type: DataTypes.DATEONLY, // 只存储日期部分
      allowNull: false,
      comment: '预订开始日期'
    },
    end_date: {
      type: DataTypes.DATEONLY, // 只存储日期部分
      allowNull: false,
      comment: '预订结束日期'
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
      comment: '订单状态ID'
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
    modelName: 'orders',
    tableName: 'orders',
    timestamps: true
  });

  return orders;
};
