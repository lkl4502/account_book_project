const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// get method
app.get("/", (req, res) => {
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
