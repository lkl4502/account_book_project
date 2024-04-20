const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const UserHistory = sequelize.define(
    "UserHistory",
    {},
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "UserHistory", // 테이블 이름
    }
  );

  UserHistory.associate = function (models) {
    UserHistory.belongsTo(models.User, {
      foreginKey: "user_id",
      sourceKey: "id",
    });
  };

  return UserHistory;
};
