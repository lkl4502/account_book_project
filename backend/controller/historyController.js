const db = require("../models");
UserHistory = db.UserHistory;

const registerHistory = async (req, res) => {
  const history = await UserHistory.create({
    user_id: req.body.user_id,
    type: req.body.type,
    sum: req.body.sum,
    date: req.body.date,
    category: req.body.category,
  }).catch((err) => console.log(err));

  res.status(200).send(history);
};

const getHistory = async (req, res) => {};

module.exports = {
  registerHistory,
};
