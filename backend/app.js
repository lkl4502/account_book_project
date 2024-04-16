const express = require("express");
const app = express();

// get method
app.get("/", (req, res) => {
  // 200 응답 지정, 메시지 전송
  res.status(200).send("hello express server!!");
});

app.post("/write", (req, res) => {
  /* code */
});

// server start
app.listen(8000, () => {
  console.log("start express server");
});
