'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_info.belongsTo(models.users, {
        foreignKey: 'user_id',
        targetKey: 'id',
        onDelete: 'CASCADE', // 当 users 表中对应用户删除时，自动删除 user_info 中关联的记录
        // onUpdate: 'CASCADE'  // 当 users 表中对应用户更新时，自动更新 user_info 中的记录
      });
    }
  }
  user_info.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // 自动递增
      allowNull: false,
      comment: '标识'
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      comment: '关联用户标识'
    },
    user_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '用户昵称，默认用用户邮箱取名'
    },
    user_avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '用户头像图片URL'
    },
    user_profile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '用户个人简介'
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
    modelName: 'user_info',
    tableName: 'user_info',
    timestamps: true
  });
  return user_info;
};