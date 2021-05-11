const { user } = require('../models/user');
const UserService = require('../services/userService');
const { EMAIL_REGEXP, NUMBER_REGEXP} = require('../validators/regexp.enum');

// const createUserValid = (req, res, next) => {
//     // TODO: Implement validatior for user entity during creation
//     try {
//         const { firstName, lastName, email, phoneNumber, password } = req.body;
//
//         if(firstName.length > 0 && lastName && email.includes('@gmail.com') && EMAIL_REGEXP.test(email) && NUMBER_REGEXP.test(phoneNumber) && password.length >=3) {
//             throw new Error('Some field is empty!');
//         }
//         // if(typeof firstName == "string" &&
//         //     firstName.trim().length > 0 &&
//         //     typeof lastName == "string" &&
//         //     lastName.trim().length > 0) {
//         //     throw new Error('Some field is empty!');
//         // }
//
//         next();
//     } catch (e) {
//         res.status(404).json({
//             error: true,
//             message: e,
//         });
//     }
// }
//
// const updateUserValid = async (req, res, next) => {
//     // TODO: Implement validatior for user entity during update
//     try {
//         const { id } = req.params;
//         const { email, phoneNumber } = req.body;
//
//         const userValid = await UserService.findUsersById(id);
//
//         if(!userValid) {
//             throw new Error('Not existing id!');
//         }
//
//         if(user.email === email || user.phoneNumber === phoneNumber) {
//             throw new Error('User already exists!');
//         }
//
//         next();
//     } catch (e) {
//         res.status(404).json({
//             error: true,
//             message: e,
//         });
//     }
//
// }
//
// exports.createUserValid = createUserValid;
// exports.updateUserValid = updateUserValid;

//

const createUserValid = (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;

        if(!firstName || !lastName) {
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

        if (!fields.every(key => userKeys.indexOf(key) >= 0) || req.body.id || !UserService.findUsersById(id)) {
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