const Users = require("../models/users.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (typeof username !== "string" || null) {
      return res.status(400).json({
        error: "invalid username",
        message: "username can not be null or different to string",
      });
    }

    if (typeof email !== "string" || null) {
      return res.status(400).json({
        error: "invalid email",
        message: "email can not be null or different to string",
      });
    }

    if (typeof password !== "string" || null) {
      return res.status(400).json({
        error: "invalid password",
        message: "password can not be null or different to string",
      });
    }
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed });
    res.status(201).send("User created");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createUser,
};
