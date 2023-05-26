const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Todos = db.define(
  "todos",
  {
    title: {
      type: DataTypes.STRING(50),
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Todos;
