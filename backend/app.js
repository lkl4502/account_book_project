const express = require("express");
const port = process.env.PORT || 8000;
const router = require("./routers");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api", router);

// get method
app.get("/login", (req, res) => {
  // 200 응답 지정, 메시지 전송
  res.status(200).send("hello express server!!");
});

// app.post("/signup", (req, res) => {
//   // 200 응답 지정, 메시지 전송
//   res.status(200).send("hello express server!!");
// });

// app.post("/write", (req, res) => {
//   /* code */
// });

// server start
app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
