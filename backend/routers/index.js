const userRouter = require("./UserRouter");
const transactionRouter = require("./TransactionRouter");

const router = require("express").Router();

router.use(userRouter.path, userRouter.router);
router.use(transactionRouter.path, transactionRouter.router);

module.exports = router;
