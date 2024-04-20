const db = require("../models");
User = db.User;

const signUp = async (req, res) => {
  const overlap_check = User.findOne({
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

module.exports = { signUp };
