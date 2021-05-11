const { user } = require('../models/user');
const UserService = require('../services/userService');
const { EMAIL_REGEXP, NUMBER_REGEXP} = require('../validators/regexp.enum');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;

        if(!firstName && !lastName && !email.includes('@gmail.com') && !EMAIL_REGEXP.test(email) && !NUMBER_REGEXP.test(phoneNumber) && password.length >=3) {
            throw new Error('Some field is empty!');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
}

const updateUserValid = async (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    try {
        const { id } = req.params;
        const { email, phoneNumber } = req.body;

        const userValid = await UserService.findUsersById(id);

        if(!userValid) {
            throw new Error('Not existing id!');
        }

        if(user.email === email || user.phoneNumber === phoneNumber) {
            throw new Error('User already exists!');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }

}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;