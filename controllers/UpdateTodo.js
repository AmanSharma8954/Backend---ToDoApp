// import the model
const Todo = require("../models/todoModel");

//define route handler
exports.updateTodo = async(req, res) => {
  try {

    // getting id form req params
    const {id} = req.params;

    // getting data from req body
    const {title,description} = req.body;

    // find data using id and update
    const todo = await Todo.findByIdAndUpdate(
        {_id: id},
        {title,description, updatedAt: Date.now()},
    )

    // positive response
    res.status(200).json({
        success: true,
        data: todo,
        message: `Updated Successfully`
    })

  } catch (err) {
    // negative response
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal Server Error",
      message: err.message,
    });
  }
};
