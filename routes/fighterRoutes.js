const { Router } = require('express');
const fighterControler = require('../controlers/fighterControler');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', responseMiddleware, fighterControler.getAllFighters );

router.get('/:id', responseMiddleware, fighterControler.getOneFighter );

router.post('/', responseMiddleware, createFighterValid, fighterControler.createFighter );

router.put('/:id', responseMiddleware, updateFighterValid, fighterControler.updateFighter );

router.delete('/:id', responseMiddleware, fighterControler.deleteFighter );

module.exports = router;