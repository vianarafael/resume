// require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: "postres://rafa:password@localhost/resume",
    migrations: {
      directory: "./db/migrations"
    }
  },

  migrations: {
    directory: "./db/migrations"
  }
};
