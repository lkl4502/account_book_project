const userRouter = require("./UserRouter");

const router = require("express").Router();

router.use(userRouter.path, userRouter.router);

module.exports = router;
