const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});

dbConnection.query(
  "CREATE DATABASE IF NOT EXISTS event_participants",
  function (err) {
    if (err) throw err;
    console.log("Database event_participants created");

    dbConnection.query("USE event_participants", (err) => {
      if (err) throw err;

      const eventParticipantsQuery = `
        CREATE TABLE IF NOT EXISTS participants (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR (100) NOT NULL,
            surname VARCHAR (100) NOT NULL,
            email VARCHAR (100) NOT NULL,
            phoneNumber VARCHAR (100) NOT NULL,
            primary key (id)
        )
        `;

      dbConnection.query(eventParticipantsQuery, (err) => {
        if (err) throw err;
        console.log("Participants table created");
      });
    });
  }
);

module.exports = {
  dbConnection,
};
