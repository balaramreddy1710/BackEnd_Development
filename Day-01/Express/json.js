const express = require("express");
const app = express();

let post = [
  { id: 1, messages: "HI" },
  { id: 2, messages: "Hello" },
  { id: 3, messages: "Hola" },
  { id: 4, messages: "Yo" },
];

app.get("/api/users/", (req, res) => {
  res.json(post);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(post.filter((i) => i.id == id));
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
