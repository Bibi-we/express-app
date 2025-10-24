const Todo = require("../schemas/todo") 

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.send(todos);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const todo = new Todo({ title })
        await todo.save()
        res.send(todo)
    } catch (error) {
        res.status(500).send({ message: error.message });
}
}; 

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findById(id)
        res.send(todo);
    }   catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true }) 
        res.send(todo) 
    } catch (error) {
        res.status(500).send({ message: error.message});
    }
}