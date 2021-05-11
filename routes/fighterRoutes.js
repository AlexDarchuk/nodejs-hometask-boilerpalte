const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', responseMiddleware, (req, res, next) => {
    try {
        const allFighters = FighterService.findFighters();

        if (allFighters) {
            res.status(200).json(allFighters);
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

router.get('/:id', responseMiddleware, (req, res, next) => {
    try {
        const { id } = req.params;

        const oneFighter = FighterService.findFighterById(id);

        if (oneFighter) {
            res.status(200).json(oneFighter);
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

router.post('/', createFighterValid, (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            health: req.body.health,
            power: req.body.power,
            defense: req.body.defense,
        };

        const createFighter = FighterService.createFighter(data);

        if (createFighter) {
            res.status(200).json('Fighter is create!');
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

router.put('/:id', responseMiddleware, updateFighterValid, (req, res, next) => {
    try {
        const { id } = req.params;
        const data = {
            name: req.body.name,
            health: req.body.health,
            power: req.body.power,
            defense: req.body.defense,
        };

        const updateFighter = FighterService.updateFighter(id, data);

        if (updateFighter) {
            res.status(200).json('Fighter is update!');
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

router.delete('/:id', responseMiddleware, (req, res, next) => {
    try {
        const {id} = req.params;

        const deleteFighter = FighterService.deleteFighter(id);

        if (deleteFighter) {
            res.status(200).json('Fighter is delete!');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

module.exports = router;