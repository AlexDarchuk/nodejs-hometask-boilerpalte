const { Router } = require('express');
const userControler = require('../controlers/userControler');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', responseMiddleware, userControler.getAllUser );

router.get('/:id', responseMiddleware, userControler.getOneUser );

router.post('/', responseMiddleware, createUserValid, userControler.createUser );

router.put('/:id', responseMiddleware, updateUserValid, userControler.updateUser );

router.delete('/:id', responseMiddleware, userControler.deleteUser );

module.exports = router;