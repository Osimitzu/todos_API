const Router = require("express");
const { createCategory } = require("../controllers/categories.controllers");

const router = Router();

router.post("/api/v1/categories", createCategory);

module.exports = router;
