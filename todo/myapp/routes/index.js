const express = require('express');
const fs = require('fs');
const router = express.Router();

// Add this line to use express.urlencoded middleware
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/todo', (req, res) => {
    const todos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
    res.render('todo', { todos });
});

// Add a new todo
router.post('/todo/add', (req, res) => {
    const todos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
    todos.push(req.body.newTodo);
    fs.writeFileSync('./todos.json', JSON.stringify(todos));
    res.redirect('/todo');
});

// Delete a todo
router.post('/todo/delete', (req, res) => {
    const todos = JSON.parse(fs.readFileSync('./todos.json', 'utf8'));
    const updatedTodos = todos.filter(todo => todo !== req.body.todoToDelete);
    fs.writeFileSync('./todos.json', JSON.stringify(updatedTodos));
    res.redirect('/todo');
});

module.exports = router;