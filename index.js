const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API Tests");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
