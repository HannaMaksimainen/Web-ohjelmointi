const mysql = require("mysql");
const express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = app.listen(3001, () => console.log("Tietokanta valmis:"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "kokeilu1",
  password: "henkilo1",
  database: "yhteystiedot",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log("Tapahtui virhe yhdistettäessä tietokantaan");
    return;
  }
  console.log("Yhteys muodostettu");
});

/*CORS isn’t enabled on the server, this is due to security reasons by default,
so no one else but the webserver itself can make requests to the server.*/
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  // Pass to next layer of middleware
  next();
});

app.get("/henkilot", (req, res) => {
  conn.query("SELECT * FROM henkilot", (err, rows) => {
    if (err) throw err;
    return res.status(200).json(rows);
  });
});

app.get("/henkilot/:id", (req, res) => {
  const id = Number(req.params.id);
  //const id = req.params.id;
  conn.query("SELECT * FROM henkilot WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

app.put("/henkilot/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = req.body;
  conn.query(
    "UPDATE henkilot SET ? WHERE id = ?;",
    [updatedUser, req.params.id],
    function (error, results) {
      if (error) throw error;
      conn.query("SELECT * FROM henkilot WHERE id=?", id, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

// DELETE a user
app.delete("/henkilot/:id", (req, res) => {
  console.log("serverin poiston id:");
  const id = Number(req.params.id);
  console.log(id);
  conn.query(
    "DELETE FROM henkilot Where id = ?",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      return;
    }
  );
});

app.post("/lisaa", (req, res) => {
  let henkilo = req.body;
  console.log(henkilo);
  if (!henkilo) {
    return res
      .status(400)
      .send({ error: true, message: "Henkiloa ei voitu lisata" });
  }
  conn.query(
    "INSERT INTO henkilot SET ? ",
    henkilo,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify({ id: results.insertId, ...henkilo }));
    }
  );
});

module.exports = app;
