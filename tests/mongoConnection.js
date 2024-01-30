const mongoose = require('mongoose');
async function connect(url) {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}
async function close() {
    await mongoose.connection.close();
}
module.exports = { connect, close };
