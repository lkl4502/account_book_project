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
      token_type: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "token_type",
      },
      access_token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "at",
      },
      refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "rt",
      },
      user_seq_no: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "user_seq_no",
      },
      scope: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "access scope",
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
