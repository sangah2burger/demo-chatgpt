const express = require('express');
const fs = require('fs');
const router = express.Router();

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

module.exports = router;