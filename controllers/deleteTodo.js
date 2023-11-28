// import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
  try {
    
    const {id} = req.params;

    await Todo.findByIdAndDelete(id);

    // response
    res.status(200).json({
      success: true,
      message: " Todo is Deleted ",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
