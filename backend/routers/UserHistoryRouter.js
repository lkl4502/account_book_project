const router = require("express").Router();
const UserHistoryController = require("../controller/historyController");

const path = "/userHistory";

router.post("/register", UserHistoryController.registerHistory);

module.exports = { router, path };
