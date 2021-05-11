const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', responseMiddleware, (req, res, next) => {
    try {
        const allUsers = UserService.findUsers();

        if (allUsers) {
            res.status(200).send(allUsers);
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
        const oneUser = UserService.findUsersById(id);

        if (oneUser) {
            res.status(200).json(oneUser);
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
});

router.post('/',responseMiddleware, createUserValid, (req, res, next) => {
    try {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
        };

        const createUser = UserService.createUser(data);

        if(createUser) {
            res.status(200).json('User is create!');
        }

        next();
    }catch (e) {
        res.status(404).json({
            error: true,
            message: 'User not create!',
        });
    }
});

router.put('/:id', responseMiddleware, updateUserValid, (req, res, next) => {
    try {
        const { id } = req.params;
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
        };

        const updateUser = UserService.updateUser(id, data);

        if (updateUser) {
            res.status(200).json('User is update!');
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

        const deleteUser = UserService.deleteUser(id);

        if (deleteUser) {
            res.status(200).json('User is delete!');
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