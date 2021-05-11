const FighterService = require('../services/fighterService');

module.exports = {
    getAllFighters: (req, res) => {
        try {
            const fighters = FighterService.findFighters();

            res.status(200).json(fighters);

        } catch (e) {
            res.status(404).json('Fighters not found!');
        }
    },

    getOneFighter: (req, res) => {
        try {
            const { id } = req.params;

            const fighter = FighterService.findFighterById(id);

            res.status(200).json(fighter);

        } catch (e) {
            res.status(404).json('Fighter not found!');
        }
    },

    createFighter: (req, res) => {
        try {
            FighterService.createFighter(req.body);

            res.status(200).json('Fighter is create!');
        }catch (e) {
            res.status(400).json({
                error: true,
                message: 'Fighter not create!',
            });
        }
    },

    updateFighter: (req, res) => {
        try {
            const { id } = req.params;

            FighterService.updateFighter(id, req.body);

            res.status(200).json('Fighter is update!');
        } catch (e) {
            res.status(400).json({
                error: true,
                message: 'Fighter not update!',
            });
        }
    },

    deleteFighter: (req, res) => {
        try {
            const { id } = req.params;

            FighterService.deleteFighter(id);

            res.status(200).json('Fighter is delete!');
        } catch (e) {
            res.status(400).json({
                error: true,
                message: 'Fighter not delete!',
            });
        }
    }
}