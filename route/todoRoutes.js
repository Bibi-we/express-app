const express = require("express")
const router = express.Router()
const { getAllTodos, createTodo, getTodoById, updateTodo} = require("../controllers/todoController")

// get all of the todos 
router.get("/", getAllTodos)

// get a specific todo 
router.get("/:id", getTodoById)

// create a todo 
router.post("/", createTodo)

// update a todo 
router.put("/:id", updateTodo)

module.exports = router; 