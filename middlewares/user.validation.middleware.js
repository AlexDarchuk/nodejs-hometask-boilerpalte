const { user } = require('../models/user');
const UserService = require('../services/userService');
const { EMAIL_REGEXP, NUMBER_REGEXP} = require('../validators/regexp.enum');

const createUserValid = (req, res, next) => {
    try {
        const {id, firstName, lastName, email, phoneNumber, password } = req.body;

        if(!firstName || !lastName ) {
            throw new Error('FirstName or LastName entered incorrectly!');
        }

        if(!email || !EMAIL_REGEXP.test(email) || !email.includes('@gmail.com')) {
            throw new Error('Email entered incorrectly!');
        }

        if(!phoneNumber || !NUMBER_REGEXP.test(phoneNumber)) {
            throw new Error('Number entered incorrectly');
        }

        if ( !password|| !password.length >= 3) {
            throw new Error('Password entered incorrectly')
        }
        if(Object.keys(req.body).length == 0) {
            throw new Error('Data is empty');
        }
        next();
    }catch (e) {
        res.status(400).json(e.message);
    }
}
const userKeys = Object.keys(user);

const updateUserValid = (req, res, next) => {
    try {
        const { id } = req.params;
        const fields = Object.keys(req.body);

        if (!fields.every(key => userKeys.indexOf(key) >= 0) || id || !UserService.findUsersById(id) || Object.keys(fields).length == 0) {
            throw new Error('Validation or data processing error-1');
        } else {
            for (let key in req.body) {
                if (key === 'email' && (!req.body[key].includes('@gmail.com') || !EMAIL_REGEXP.test(req.body[key]))) {
                    throw new Error('Validation or data processing error-2')
                    break;
                }
                if (key === 'password' && req.body[key].length < 3) {
                    throw new Error('Validation or data processing error-3')
                    break;
                }
                if (key === 'phoneNumber' && !NUMBER_REGEXP.test(req.body[key])) {
                    throw new Error('Validation or data processing error-4')
                    break;
                }
            }
            next();
        }
    }catch (e) {
        res.status(400).json(e.message);
    }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;