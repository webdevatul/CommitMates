const mongoose = require("mongoose");

const connnectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://atulyadav:zyP1MArp4dC79BK4@cluster0.98i7ht7.mongodb.net/CommitMates"
    );
}

module.exports = connnectDB;
