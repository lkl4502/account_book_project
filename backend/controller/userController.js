const db = require("../models");
User = db.User;

const signUp = async (req, res) => {
  const overlap_check = await User.findOne({
    where: { email: req.body.email },
  }).catch((err) => console.log(err));

  if (overlap_check) {
    console.log("email 중복");
    return res.status(400).send("중복된 Email 입니다.");
  }

  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    phone: req.body.phone,
  }).catch((err) => console.log(err));

  res.status(200).send(user);
};

const login = async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  }).catch((err) => console.log(err));

  if (!user)
    return res
      .status(400)
      .send("입력하신 Email에 해당하는 계정이 존재하지 않습니다.");
  else {
    if (user.password != req.body.password) {
      return res.status(400).send("올바른 비밀번호를 입력해주세요.");
    }
    return res.status(200).send("로그인 성공");
  }
};

module.exports = { signUp, login };
