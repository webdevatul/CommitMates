const express = require("express");

const app = express();

app.use("/testing", (req, res) => {
    res.send("Hello from testing page");
})

app.use("/hello", (req, res) => {
    res.send("Hello hello hello...");
})

app.use("/", (req, res) => {
    res.send("Hello from dashboard");
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
});