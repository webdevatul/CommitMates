const express = require("express");
const connnectDB = require("./config/database");
const User = require("./models/user");

const app = express();

connnectDB().then(() => {
    console.log("Database connected...");
    app.use(express.json());

    //Create User
    app.post("/signup", async (req, res) => {
        try {
            const user = new User(req.body);
            await user.save();

            res.send("User created successfuly...")
        } catch (error) {
            res.status(500).send("Something went wrong!");
        }
    })


    app.listen(3000, () => {
        console.log("Server is listening on port 3000...")
    });
})
.catch((err) => {
    console.error("Database connection failed!")
})
