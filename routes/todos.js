const express = require("express");

const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getAllTodos, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getAllTodos", getAllTodos);
router.get("/getTodoById/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router;
