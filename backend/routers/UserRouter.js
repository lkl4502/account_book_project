const router = require("express").Router();
const userController = require("../controller/userController");

const path = "/user";

router.post("/signUp", userController.signUp);

module.exports = { router, path };
