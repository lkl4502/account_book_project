const db = require("../models");
Transaction = db.Transaction;

const registerTransaction = async (req, res) => {
  const transaction = await Transaction.create({
    user_id: req.body.user_id,
    type: req.body.type,
    sum: req.body.sum,
    date: req.body.date,
    category: req.body.category,
  }).catch((err) => console.log(err));

  if (!transaction) {
    return res.status(400).send({ message: "거래 내역 생성 실패" });
  } else {
    return res.status(200).send({ data: transaction });
  }
};

const getHistory = async (req, res) => {};

module.exports = {
  registerTransaction,
};
