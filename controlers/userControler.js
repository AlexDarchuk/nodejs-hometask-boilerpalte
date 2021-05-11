const UserService = require('../services/userService')

module.exports = {
    getAllUser: (req, res) => {
        try {
            const users = UserService.findUsers();

            res.status(200).json(users);

        } catch (e) {
            res.status(404).json('Users not found!');
        }
    },

    getOneUser: (req, res) => {
        try {
            const { id } = req.params;

            const user = UserService.findUsersById(id);

            res.status(200).json(user);

        } catch (e) {
            res.status(404).json('User not found!');
        }
    },

    createUser: (req, res) => {
        try {
            UserService.createUser(req.body);

            res.status(200).json('User is create!');
        }catch (e) {
            res.status(400).json({
                error: true,
                message: 'User not create!',
            });
        }
    },

    updateUser: (req, res) => {
        try {
            const { id } = req.params;

            UserService.updateUser(id, req.body);

            res.status(200).json('User is update!');
        } catch (e) {
            res.status(400).json({
                error: true,
                message: 'User not update!',
            });
        }
    },

    deleteUser: (req, res) => {
        try {
            const { id } = req.params;

            UserService.deleteUser(id);

            res.status(200).json('User is delete!');
        } catch (e) {
            res.status(400).json({
                error: true,
                message: 'User not delete!',
            });
        }
    }
}