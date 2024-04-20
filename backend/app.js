const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const db = require("./models");

//force : 서버 실행 시 마다 테이블을 재생성 할 것인지 아닌지
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB Connected Success");
  })
  .catch((err) => {
    console.error(err);
  });

// get method
app.get("/login", (req, res) => {
  // 200 응답 지정, 메시지 전송
  res.status(200).send("hello express server!!");
});

app.post("/signup", (req, res) => {
  // 200 응답 지정, 메시지 전송
  res.status(200).send("hello express server!!");
});

app.post("/write", (req, res) => {
  /* code */
});

// server start
app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
