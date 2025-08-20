const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middlwares/auth")

//middleware for admin requests
app.use("/admin", adminAuth);

app.get("/admin/getData", 
    (req, res) => {
        res.send("Data returned successfully");
    }
);

app.delete("/admin/deleteData", 
    (req, res) => {
        res.send("Data deleted successfully");
    }
);


// //get user - auth
app.get("/user/:userId", userAuth, (req, res) => {
    console.log(req.params);
    res.send(
        {
            first_name: "Atul",
            last_name: "Yadav"
        }
    );
})

//Error generate
app.get("/userAdd", (req, res, next) => {
    try { 
        throw new Error("manually error handling test");
    } 
    catch (error) {   
        next(error);     
    }
});

//store user
// app.use("/user", 
//     (req, res, next) => {
//         console.log("Response handler 1")
//         //res.send("Response handler 1");
//         next();
//     },
//     (req, res) => {
//         console.log("Response handler 2")
//         res.send("Response handler 2");
//     }

// );

//error handling globally
app.use("/", (err, req, res,  next) => {
    console.error("Error caught:", err.message);
    res.status(500).json({ error: err.message });
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
});