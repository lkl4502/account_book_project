const router = require("express").Router();
const userController = require("../controller/userController");

const path = "/user";

router.post("/signUp", userController.signUp);
router.post("/login", userController.login);
router.get("/profile", userController.getProfile);
router.get("/token", userController.getToken);

module.exports = { router, path };
