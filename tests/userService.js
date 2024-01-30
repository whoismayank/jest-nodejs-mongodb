const UserModel = require('./UserModel');

const userService = {
    // Create a new user
    async createUser(userData) {
        const user = new UserModel(userData);
        return await user.save();
    },

    // Get a user by ID
    async getUserById(userId) {
        return await UserModel.findById(userId);
    },

    // Update a user by ID
    async updateUser(userId, updateData) {
        return await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
    },

    // Delete a user by ID
    async deleteUser(userId) {
        return await UserModel.findByIdAndDelete(userId);
    },

    // List all users
    async listUsers() {
        return await UserModel.find({});
    }
};

module.exports = userService;
