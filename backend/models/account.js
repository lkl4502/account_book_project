const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bank: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "계좌 은행",
      },
      account_number: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: "계좌 번호",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "Account", // 테이블 이름
    }
  );

  return Account;
};
// - 비밀번호
