const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

const connection = require("./conf");

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Bienvenue sur Express");
});

//GET ALL PERSON
app.get("/contact", (req, res) => {
  connection.query("SELECT * FROM person", (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Erreur lors de l'enregistrement de vos données",
        error: err,
      });
    } else {
      res.json(results);
    }
  });
});

//POST NEW PERSON
app.post("/contact", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO person SET ?", formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "Erreur lors de l'enregistrement de vos données",
        error: err,
      });
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
