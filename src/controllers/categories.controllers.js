const Categories = require("../models/categories.model");

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    await Categories.create({ name, description });
    res.status(201).send("Category created");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createCategory,
};
