const router = require("express").Router();
const TransactionController = require("../controller/transactionController");

const path = "/transaction";

router.post("/register", TransactionController.registerTransaction);
router.get("/check", TransactionController.getTransaction);

module.exports = { router, path };
