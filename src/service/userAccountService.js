import userRepository from "../repository/userRepository.js";



class userAccountService{
    async register(registerData){
        return await userRepository.register(registerData);
    };

    async authorization(login, password){
         return await userRepository.authorization(login, password);
    }

    async deleteUser(id){
        return await userRepository.deleteUser(id);
    }

    async getUser(id){
        return await userRepository.getUser(id);
    }

    async updateUser(id, user){
        return await userRepository.updateUser(id, user);
    }
}


export default new userAccountService();