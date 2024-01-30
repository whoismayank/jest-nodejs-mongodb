// Processes the user data
function processUserData(userData) {
    if (!userData || !userData.email) {
        throw new Error('Invalid user data');
    }
    return {
        ...userData,
        emailDomain: userData.email.split('@')[1]
    };
}

module.exports = processUserData;
