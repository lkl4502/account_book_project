const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "사용자 Email",
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "사용자 이름",
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: "사용자 나이",
      },
      sex: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: "사용자 성별",
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "사용자 휴대폰 번호",
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: "사용자 비밀번호",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "User", // 테이블 이름
    }
  );

  User.associate = function (models) {
    User.hasMany(models.UserHistory, {
      foreignKey: "user_id",
      onDelete: "cascade",
    });
  };

  return User;
};
// - 비밀번호
