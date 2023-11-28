// import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async (req, res) => {
  try {
    // getting id from req params
    const {id} = req.params;

    // find id and delete entry
    await Todo.findByIdAndDelete(id);

    // positive response
    res.status(200).json({
      success: true,
      message: " Todo is Deleted ",
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
