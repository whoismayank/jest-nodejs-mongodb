// A function that simulates fetching user data
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 1000); // Simulate async API call
    });
}
module.exports = fetchUserData;
