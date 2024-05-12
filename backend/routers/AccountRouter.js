const router = require("express").Router();
const accountController = require("../controller/accountController");

const path = "/account";

router.get("/token", accountController.getToken);

module.exports = { router, path };
