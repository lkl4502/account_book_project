require("dotenv").config();

const development = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  host: "127.0.0.1",
  dialect: "mysql",
};
const test = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  host: "127.0.0.1",
  dialect: "mysql",
};
const production = {
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "web_project",
  host: "127.0.0.1",
  dialect: "mysql",
};

module.exports = { development, production, test };
