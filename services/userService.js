const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    findUsers() {
        return  UserRepository.getAll();
    }

    findUsersById(id) {
        const user = this.search({ id });

        return user;
    }

    createUser(data) {
         return  UserRepository.create(data);
    }

    updateUser(id, data) {
        return  UserRepository.update(id, data);
    }

    deleteUser(id) {
       return UserRepository.delete(id);
    }

    search(search) {
        const item = UserRepository.getOne(search);

        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();