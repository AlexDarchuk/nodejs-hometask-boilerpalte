const { fighter } = require('../models/fighter');
const FighterService = require('../services/fighterService');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    try {
        const { name, power, defense } = req.body;

        if(!name && Number.isInteger(power) && Number.isInteger(defense) && defense >= 1 && defense <= 10 && power > 0 && power < 100) {
            throw new Error('Some field is empty or bed!');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
}

const updateFighterValid = async (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    try {
        const { id } = req.params;
        const { name } = req.body;

        const fighterValid = await FighterService.findFighterById(id);

        if(!fighterValid) {
            throw new Error('Not existing id!');
        }

        if(fighterValid.name === name ) {
            throw new Error('Fighter already exists!');
        }

        next();
    } catch (e) {
        res.status(404).json({
            error: true,
            message: e,
        });
    }
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;