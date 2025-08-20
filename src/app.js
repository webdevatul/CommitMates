const express = require("express");

const app = express();

// //get user
// app.get("/user/:userId", (req, res) => {
//     console.log(req.params);
//     res.send(
//         {
//             first_name: "Atul",
//             last_name: "Yadav"
//         }
//     );
// })

//store user
app.use("/user", 
    (req, res, next) => {
        console.log("Response handler 1")
        //res.send("Response handler 1");
        next();
    },
    (req, res) => {
        console.log("Response handler 2")
        res.send("Response handler 2");
    }

);

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
});