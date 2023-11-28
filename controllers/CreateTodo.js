// import the model
const Todo = require("../models/todoModel");

//define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and descrition from req body
    const { title, description } = req.body;

    // create a new todo obj and insert into DB
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    // negative response
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
