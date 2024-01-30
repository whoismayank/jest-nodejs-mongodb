const { MongoMemoryServer } = require('mongodb-memory-server');
const { connect, close } = require('./mongoConnection');
const userService = require('./userService');
const UserModel = require('./UserModel');

describe('User Service CRUD Operations', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await connect(mongoUri);
    });

    afterAll(async () => {
        await close();
        await mongoServer.stop();
    });

    test('Create user', async () => {
        const userData = { name: 'Jane Doe', email: 'jane@example.com', age: 25 };
        const savedUser = await userService.createUser(userData);

        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toEqual(userData.name);
    });

    test('Read user', async () => {
        const userData = { name: 'Joe Doe', email: 'joe@example.com', age: 28 };
        const newUser = await userService.createUser(userData);
        const foundUser = await userService.getUserById(newUser._id);

        expect(foundUser.name).toEqual(userData.name);
    });

    test('Update user', async () => {
        const userData = { name: 'Jack Doe', email: 'jack@example.com', age: 30 };
        const newUser = await userService.createUser(userData);
        const updatedUser = await userService.updateUser(newUser._id, { age: 31 });

        expect(updatedUser.age).toEqual(31);
    });

    test('Delete user', async () => {
        const userData = { name: 'Julie Doe', email: 'julie@example.com', age: 26 };
        const newUser = await userService.createUser(userData);
        await userService.deleteUser(newUser._id);

        const foundUser = await UserModel.findById(newUser._id);
        expect(foundUser).toBeNull();
    });

    test('List users', async () => {
        await UserModel.deleteMany({}); // Clearing existing users
        await userService.createUser({ name: 'User1', email: 'user1@example.com', age: 20 });
        await userService.createUser({ name: 'User2', email: 'user2@example.com', age: 22 });

        const users = await userService.listUsers();
        expect(users.length).toEqual(2);
    });

    // Additional tests...
});
