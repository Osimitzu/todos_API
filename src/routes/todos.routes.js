const Router = require("express");
const {
  createTodo,
  getAllTodosFromUser,
  updateTodoFromUser,
  deleteTodoFromUser,
} = require("../controllers/todos.controllers");

const router = Router();

router.post("/api/v1/todos", createTodo);

router.get("/api/v1/todos/:userId", getAllTodosFromUser);

router.put("/api/v1/todos/:userId/:id", updateTodoFromUser);

router.delete("/api/v1/todos/:userId/:id", deleteTodoFromUser);

module.exports = router;
