const { Op } = require("sequelize");
const db = require("../models");
const Transaction = db.Transaction;

const registerTransaction = async (req, res) => {
  const transaction = await Transaction.create({
    user_id: req.body.user_id,
    type: req.body.type,
    sum: req.body.sum,
    date: req.body.date,
    category: req.body.category,
    memo: req.body.memo,
  }).catch((err) => console.log(err));

  if (!transaction) {
    return res.status(400).send({ message: "거래 내역 생성 실패" });
  } else {
    return res.status(200).send({ data: transaction });
  }
};

const getTransaction = async (req, res) => {
  console.log(req.query.type);
  const transaction_list = await Transaction.findAll({
    attributes: ["id", "type", "sum", "date", "category", "memo"],
    where: {
      user_id: req.query.id,
      date: {
        [Op.between]: [new Date(req.query.start), new Date(req.query.end)],
      },
      ...(req.query.type != "null" && {
        type: JSON.parse(req.query.type) === true,
      }),
    },
    order: [
      ["date", "asc"],
      ["createdAt", "asc"],
    ],
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
