const { MongoMemoryServer } = require('mongodb-memory-server');
const { startDatabase, getDatabase } = require('../tests/mongoConnection');

describe('MongoDB Tests', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await startDatabase(mongoUri);
    });

    afterAll(async () => {
        await mongoServer.stop();
    });

    test('should insert a doc into collection', async () => {
        const db = getDatabase();
        const users = db.collection('users');

        const mockUser = { _id: '1', name: 'John Doe', age: 30 };
        await users.insertOne(mockUser);

        const insertedUser = await users.findOne({ _id: '1' });
        expect(insertedUser).toEqual(mockUser);
    });

    // Additional tests...
});
