// Simulates fetching user data from an external API
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
        }, 1000);
    });
}

module.exports = fetchUserData;
