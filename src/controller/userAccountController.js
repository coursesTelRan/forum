import userAccountService from "../service/userAccountService.js";

class UserController {
    async register(req, res) {
        try {
            const user = await userAccountService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async authorization(req, res) {
        try {
            const user = await userAccountService.authorization(req.body.login, req.body.password);
            user ? res.status(200).json(user) : res.status(401).json({ message: "Invalid login or password" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await userAccountService.deleteUser(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUser(req, res) {
        try {
            const user = await userAccountService.getUser(req.params.id);
            user ? res.status(200).json(user) : res.status(404).json({ message: "User not found" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await userAccountService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new UserController();