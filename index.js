const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categorys = require("./data/category.json");
app.get("/", (req, res) => {
  res.send(`Sever running on port:${port}`);
});
app.get("/categorys", (req, res) => {
  res.send(categorys);
});

app.get("/categorys/:id", (req, res) => {
  const id = req.params.id;

  const category = categorys.find((category) => category.id === id);
  res.send(category);
});
app.listen(port, () => {
  console.log(`port running ${port}`);
});
