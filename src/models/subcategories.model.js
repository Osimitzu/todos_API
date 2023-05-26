const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Subcategories = db.define(
  "subcategories",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Subcategories;
