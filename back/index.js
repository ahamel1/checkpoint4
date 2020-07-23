const express = require("express");
const { response } = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  response.send("Bienvenue sur Express");
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
