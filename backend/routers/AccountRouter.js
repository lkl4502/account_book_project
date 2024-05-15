const router = require("express").Router();
const accountController = require("../controller/accountController");

const path = "/account";

router.get("/token", accountController.getToken);
router.get("/", accountController.getAccount);

module.exports = { router, path };
