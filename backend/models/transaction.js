const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: "수입: true, 지출: false",
      },
      sum: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: "금액",
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "일시",
      },
      category: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "분야",
      },
    },
    {
      charset: "utf8", // 한국어 설정
      collate: "utf8_general_ci", // 한국어 설정
      tableName: "Transaction", // 테이블 이름
    }
  );

  return Transaction;
};
