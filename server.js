const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log({ name, email, message });
  res.send("Message received!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});