const { where } = require("sequelize");
const db = require("../models");
const Transaction = db.Transaction;

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

const getTransaction = async (req, res) => {
  const transaction_list = await Transaction.findAll({
    where: { user_id: req.query.id },
  }).catch((err) => console.log(err));

  if (!transaction_list) {
    return res
      .status(400)
      .send({ message: "해당 기간 내의 거래 내역이 존재하지 않습니다." });
  } else {
    return res.status(200).send({ data: transaction_list });
  }
};

module.exports = {
  registerTransaction,
  getTransaction,
};
