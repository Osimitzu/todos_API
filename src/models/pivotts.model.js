const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Pivotts = db.define(
  "pivotts",
  {
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "todo_id",
    },
    subId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      field: "sub_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Pivotts;
