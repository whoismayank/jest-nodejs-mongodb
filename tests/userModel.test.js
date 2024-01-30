const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const UserModel = require('./UserModel');
const { connect, close } = require('./mongoConnection');

describe('User Model Test', () => {
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

    test('should create a user', async () => {
        const userData = { name: 'John Doe', email: 'john@example.com', age: 30 };
        const user = new UserModel(userData);
        await user.save();

        const foundUser = await UserModel.findOne({ email: 'john@example.com' });
        expect(foundUser.name).toEqual('John Doe');
        expect(foundUser.age).toEqual(30);
    });

    // Additional tests...
});
