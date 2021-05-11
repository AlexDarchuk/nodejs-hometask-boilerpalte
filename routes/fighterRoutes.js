const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

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