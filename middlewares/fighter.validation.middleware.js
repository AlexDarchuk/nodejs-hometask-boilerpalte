const { fighter } = require('../models/fighter');
const FighterService = require('../services/fighterService');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    try {
        const { name, power, defense } = req.body;
        console.log(power)
        console.log(req.body)
        if(!name) {
            throw new Error('Some field is empty or bed!');
        }
        if(power <= 0 || power > 100) {
            throw new Error('Power is bed!');
        }

        if(defense < 1 || defense > 10 ) {
            throw new Error('Defense is bed!');
        }

        if(!Number.isInteger(power) || !Number.isInteger(defense)) {
            throw new Error('Power or Defense must be an integer!');
        }

        if(Object.keys(req.body).length == 0) {
            throw new Error('Data is empty');
        }

        next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}

const fighterKeys = Object.keys(fighter);

const updateFighterValid = async (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    try {
        const { id } = req.params;
        const fields = Object.keys(req.body);

        if (!fields.every(key => fighterKeys.indexOf(key) >= 0) || req.body.id ||FighterService.findFighterById(id) || Object.keys(fields).length == 0) {
            throw new Error('Fighter Validation or data processing error');
        } else
            for (let key in req.body) {
                if (key === 'health' && req.body[key] < 0) {
                    throw new Error('Fighter Validation or data processing error-1');
                    break;
                }
                if (key === 'defense' && (req.body[key] < 1 || req.body[key] > 10 || isNaN(req.body[key]))) {
                    throw new Error('Fighter Validation or data processing error-2');
                    break;
                }
                if (key === 'power' && (req.body[key] <= 0 || req.body[key] >= 100 || isNaN(req.body[key]))) {
                    throw new Error('Fighter Validation or data processing error-3');
                    break;
                }
            }
            next();
    } catch (e) {
        res.status(400).json(e.message);
    }
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;