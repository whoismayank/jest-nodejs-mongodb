const fetchUserData = require('./userDataFetcher');
const processUserData = require('./userDataProcessor');

describe('User Data Integration', () => {
    test('fetch and process user data', async () => {
        const userData = await fetchUserData();
        const processedData = processUserData(userData);

        expect(userData).toBeDefined();
        expect(processedData.emailDomain).toBeDefined();
        expect(processedData.emailDomain).toBe('example.com');
    });
});
