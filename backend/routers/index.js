const userRouter = require("./UserRouter");
const historyRouter = require("./UserHistoryRouter");

const router = require("express").Router();

router.use(userRouter.path, userRouter.router);
router.use(historyRouter.path, historyRouter.router);

module.exports = router;
