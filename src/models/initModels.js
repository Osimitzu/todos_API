const Users = require("./users.model");
const Todos = require("./todos.model");
const Categories = require("./categories.model");
const Subcategories = require("./subcategories.model");
const Pivotts = require("./pivotts.model");

const initModels = () => {
  // Relación usuarios - todos --> 1 - M
  // Una tarea le pertenece a un usuario:
  Todos.belongsTo(Users, { foreignKey: "userId" });
  // Un usuario puede tener muchas tareas:
  Users.hasMany(Todos, { foreignKey: "userId" });

  // Relación categorias - todos --> 1 - M
  // Una tarea pertenece a una categoria:
  Todos.belongsTo(Categories, { foreignKey: "categoryId" });
  // Una categoria tiene muchas tareas:
  Categories.hasMany(Todos, { foreignKey: "categoryId" });

  // Relación subcategorias - todos --> M - M
  // Una tarea puede tener muchas subcategorias:
  Pivotts.belongsTo(Todos, { foreignKey: "todoId" });
  Todos.hasMany(Pivotts, { foreignKey: "todoId" });
  // Una subcategoria puede pertenecer a muchas tareas:
  Pivotts.belongsTo(Subcategories, { foreignKey: "subId" });
  Subcategories.hasMany(Pivotts, { foreignKey: "subId" });
};

module.exports = initModels;
