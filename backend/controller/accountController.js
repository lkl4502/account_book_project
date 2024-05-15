const { where } = require("sequelize");
const db = require("../models");
const axios = require("axios");
Account = db.Account;

const getToken = async (req, res) => {
  console.log(req.query);
  try {
    const axios_res = await axios.post(
      "https://testapi.openbanking.or.kr/oauth/2.0/token",
      {
        code: req.query.code,
        client_id: req.query.client_id,
        client_secret: req.query.client_secret,
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );

    if (axios_res.status === 200) {
      const account = await Account.create({
        token_type: axios_res.data.token_type,
        access_token: axios_res.data.access_token,
        refresh_token: axios_res.data.refresh_token,
        user_seq_no: axios_res.data.user_seq_no,
        scope: axios_res.data.scope,
        user_id: req.query.user_id,
      }).catch((err) => console.log(err));

      if (!account) {
        return res
          .status(400)
          .send({ message: "계좌 정보 생성에 실패하였습니다." });
      }
      return res.status(200).send({ message: "계좌 정보 생성 후 연결 성공" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "토근 발급에 실패하였습니다." });
  }
};

const getAccount = async (req, res) => {
  const account = await Account.findOne({
    where: {
      user_id: req.query.user_id,
    },
  }).catch((err) => {
    console.log(err);
    return res.status(400).send({ message: "계좌 조회 실패" });
  });

  if (!account) {
    return res
      .status(200)
      .send({ message: "연결된 계좌가 존재하지 않습니다.", data: null });
  } else {
    return res.status(200).send({ data: account });
  }
};

module.exports = { getToken, getAccount };
