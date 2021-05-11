const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters

    findFighters() {
      return  FighterRepository.getAll();
    }

    findFighterById(id) {
        return this.search({ id });
    }

    createFighter(data) {
        return  FighterRepository.create(data);
    }

    updateFighter(id, data) {
        return  FighterRepository.update(id, data);
    }

    deleteFighter(id) {
        return  FighterRepository.delete(id);
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