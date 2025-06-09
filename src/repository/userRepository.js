import User from "../model/userModel.js";


class UserAccountRepository {
    async register(registerData) {
        const user = new User(registerData);
        return user.save();
    }


    async authorization(login, password) {
        return User.authorization(login, password);
    }

    async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }

    async getUser(id) {
        return User.findById(id)
    }

    async updateUser(id, user) {
        //ToDo
        return User.findByIdAndUpdate(id, user)
    }

    async addRole(id, user){
        //ToDo

    }
    async deleteRole(id) {
        //ToDo
    }
    async updatePassword(id, user) {
        //ToDo
    }

}


export default new UserAccountRepository();
