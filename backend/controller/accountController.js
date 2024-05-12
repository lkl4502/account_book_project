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

    console.log(axios_res.status);
    console.log(axios_res.data);

    if (axios_res.status === 200) {
      const account = await Account.create({
        token_type: axios.data.token_type,
        access_token: axios.data.access_token,
        refresh_token: axios.data.refresh_token,
        user_seq_no: axios.data.user_seq_no,
        scope: axios.data.scope,
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
    console.log(err.response.data);
    return res.status(400).send({ message: "토근 발급에 실패하였습니다." });
  }
};

module.exports = { getToken };
