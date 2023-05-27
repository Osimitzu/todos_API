const express = require("express");
require("dotenv").config();
const db = require("./utils/database");
const userRoutes = require("./routes/users.routes");
const categoryRoutes = require("./routes/categories.routes");
const subcategoryRoutes = require("./routes/subcategories.routes");
const todoRoutes = require("./routes/todos.routes");

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

app.use(userRoutes);
app.use(categoryRoutes);
app.use(subcategoryRoutes);
app.use(todoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT} (/OoO)/`);
});
