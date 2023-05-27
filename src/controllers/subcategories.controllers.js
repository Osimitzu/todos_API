const Subcategories = require("../models/subcategories.model");

const createSubcategories = async (req, res) => {
  try {
    const { name, description } = req.body;
    await Subcategories.create({ name, description });
    res.status(201).send("Subcategory created");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createSubcategories,
};
