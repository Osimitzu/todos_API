const Router = require("express");
const {
  createSubcategories,
} = require("../controllers/subcategories.controllers");

const router = Router();

router.post("/api/v1/subcategories", createSubcategories);

module.exports = router;
