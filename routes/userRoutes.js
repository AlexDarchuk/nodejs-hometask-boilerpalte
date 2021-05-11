const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', (req, res, next) => {
    res.send('Welcom!')
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(`User id is: ${id}`);
});

router.post('/', (req, res, next) => {
    res.send('Welcom!');
});

router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(`User id is: ${id}`);
});

router.delete('/:id', (req, res, next) => {
    res.send('User is delete!');
});

module.exports = router;