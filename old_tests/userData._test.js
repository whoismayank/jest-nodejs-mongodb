const fetchUserData = require('./userData');

describe('fetchUserData function', () => {
    test('fetches user data correctly', async () => {
        const data = await fetchUserData();
        expect(data).toEqual({ name: 'John Doe', age: 30 });
    });
});
