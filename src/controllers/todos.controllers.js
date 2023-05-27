const Todos = require("../models/todos.model");
const Pivotts = require("../models/pivotts.model");

const createTodo = async (req, res) => {
  try {
    const { title, content, userId, categoryId, subId } = req.body;
    const newTodo = await Todos.create({ title, content, userId, categoryId });
    await Pivotts.create({ subId, todoId: newTodo.id });
    res.status(201).send("Todo created");
  } catch (err) {
    res.status(400).json(err);
  }
};

const getAllTodosFromUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Todos.findOne({
      where: { userId },
    });

    if (!user) {
      return res.status(400).json({
        error: "Invalid user",
        message: "User doesn't exist",
      });
    }
    const todos = await Todos.findAll({
      where: { userId },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Pivotts,
          attributes: ["subId"],
        },
      ],
    });
    res.json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateTodoFromUser = async (req, res) => {
  try {
    const { completed } = req.body;
    const { userId, id } = req.params;

    const user = await Todos.findOne({
      where: { userId },
    });

    if (!user) {
      return res.status(400).json({
        error: "Invalid user",
        message: "User doesn't exist",
      });
    }

    const todo = await Todos.findOne({
      where: { id },
    });

    if (!todo) {
      return res.status(400).json({
        error: "Invalid todo",
        message: "Todo doesn't exist",
      });
    }

    await Todos.update(
      {
        completed,
      },
      {
        where: { userId, id },
      }
    );
    res.status(201).send("Todo updated");
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteTodoFromUser = async (req, res) => {
  try {
    const { userId, id } = req.params;

    const user = await Todos.findOne({
      where: { userId },
    });
    if (!user) {
      return res.status(400).json({
        error: "Invalid user",
        message: "User doesn't exist",
      });
    }

    const todo = await Todos.findOne({
      where: { userId, id },
    });
    if (!todo) {
      return res.status(400).json({
        error: "Invalid todo",
        message: "Todo doesn't exist",
      });
    }

    await Pivotts.destroy({
      where: { todoId: id },
    });

    await Todos.destroy({
      where: { userId, id },
    });

    res.status(201).send("Todo deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createTodo,
  getAllTodosFromUser,
  updateTodoFromUser,
  deleteTodoFromUser,
};
