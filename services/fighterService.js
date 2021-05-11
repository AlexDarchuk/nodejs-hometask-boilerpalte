const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    findFighters() {
        const fighters = FighterRepository.getAll();

        if (!fighters) {
            throw new Error('Fighters not found!');
        }
        return fighters;
    }

    findFighterById(id) {
        const fighter = FighterRepository.getOne(id);

        if (!fighter) {
            throw new Error('Fighter not found!');
        }
        return fighter;
    }

    createFighter(data) {
        const createFighter = FighterRepository.create(data);

        if (createFighter) {
            throw new Error('Fighter not create!');
        }
        return createFighter;
    }

    updateFighter(id, data) {
        const fighterUpdate = FighterRepository.update(id, data);

        if (!fighterUpdate.id) {
            throw new Error('Fighter not update!');
        }
        return fighterUpdate;
    }

    deleteFighter(id) {
        const fighterDelete = FighterRepository.delete(id);

        if(!fighterDelete) {
            throw new Error('Fighter not delete!');
        }
        return fighterDelete;
    }

    search(search) {
        const fighterSearch = FighterRepository.getOne(search);

        if(!fighterSearch) {
            return null;
        }
        return fighterSearch;
    }
}

module.exports = new FighterService();