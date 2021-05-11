const { UserRepository } = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user

    findUsers() {
        const users = UserRepository.getAll();

        if (!users) {
            throw new Error('Users not found!');
        }
        return users;
    }

    findUsersById(id) {
        const user = UserRepository.getOne(id);

        if (!user) {
            throw new Error('User not found!');
        }
        return user;
    }

    createUser(data) {
        const createUser = UserRepository.create(data);

        if (createUser) {
            throw new Error('User not create!');
        }
        return createUser;
    }

    updateUser(id, data) {
        const userUpdate = UserRepository.update(id, data);

        if (!userUpdate.id) {
            throw new Error('User not update!');
        }
        return userUpdate;
    }

    deleteUser(id) {
        const userDelete = UserRepository.delete(id);

        if(!userDelete) {
            throw new Error('User not delete!');
        }
        return userDelete;
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