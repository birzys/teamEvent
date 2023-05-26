const express = require("express");
const { dbConnection } = require("../database");
const { defaultCallBack } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/participants", (req, res) => {
  dbConnection.execute(`SELECT * FROM participants`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/participants", (req, res) => {
  const { name, surname, email, phoneNumber } = req.body;

  const eventParticipantsQuery =
    "INSERT INTO participants (name, surname, email, phoneNumber) VALUES (?, ?, ?, ?)";
  dbConnection.execute(
    eventParticipantsQuery,
    [name, surname, email, phoneNumber],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

router.delete("/participants/:id", (req, res) => {
  const { id } = req.params;

  dbConnection.execute(
    "DELETE FROM participants WHERE id=?",
    [id],
    (err, result) => defaultCallBack(err, result, res)
  );
});

module.exports = router;
