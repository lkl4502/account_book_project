const db = require("../models");
User = db.User;

const signUp = async (req, res) => {
  const overlap_check = await User.findOne({
    where: { email: req.body.email },
  }).catch((err) => console.log(err));

  if (overlap_check) {
    console.log("email 중복");
    return res.status(400).send({ message: "중복된 Email 입니다." });
  }

  console.log(req.body);

  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    phone: req.body.phone,
  }).catch((err) => console.log(err));

  return res.status(200).send({ data: user });
};

const login = async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  }).catch((err) => console.log(err));

  if (!user)
    return res
      .status(400)
      .send({ message: "입력하신 Email에 해당하는 계정이 존재하지 않습니다." });
  else {
    if (user.password != req.body.password) {
      return res
        .status(400)
        .send({ message: "올바른 비밀번호를 입력해주세요." });
    }
    return res.status(200).send({ message: "로그인 성공" });
  }
};

const getProfile = async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  }).catch((err) => console.log(err));

  if (!user)
    return res.status(400).send({ message: "유저 정보를 찾지 못했습니다." });
  else return res.status(200).send({ data: user });
};

module.exports = { signUp, login, getProfile };
