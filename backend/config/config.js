require("dotenv").config();

const development = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  timezone: "Asia/Seoul",
  host: "127.0.0.1",
  dialectOptions: {
    charset: "utf8mb4",
    dateStrings: true,
    typeCast: true,
  },
  dialect: "mysql",
};
const test = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  timezone: "Asia/Seoul",
  host: "127.0.0.1",
  dialectOptions: {
    charset: "utf8mb4",
    dateStrings: true,
    typeCast: true,
  },
  dialect: "mysql",
};
const production = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  timezone: "Asia/Seoul",
  host: "127.0.0.1",
  dialectOptions: {
    charset: "utf8mb4",
    dateStrings: true,
    typeCast: true,
  },
  dialect: "mysql",
};

module.exports = { development, production, test };
