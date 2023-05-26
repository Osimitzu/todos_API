const express = require("express");
require("dotenv").config();
const db = require("./utils/database");

const initModels = require("./models/initModels");
initModels();

db.authenticate()
  .then(() => console.log("Base de datos conectada (/OoO)/"))
  .catch((err) => console.log(err));
db.sync()
  .then(() => console.log("Base de datos sincronizada (/OoO)/"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor OK (/OoO)/");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});
