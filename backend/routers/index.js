const userRouter = require("./UserRouter");
const transactionRouter = require("./TransactionRouter");
const accountRouter = require("./AccountRouter");

const router = require("express").Router();

router.use(userRouter.path, userRouter.router);
router.use(transactionRouter.path, transactionRouter.router);
router.use(accountRouter.path, accountRouter.router);

module.exports = router;
