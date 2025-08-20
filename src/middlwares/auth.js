const adminAuth = (req, res, next) => {
    const token = "abchdff";
    const isAdminAuthorised = token === "abchdff";
    if(!isAdminAuthorised)
    {
        res.status(401).send("Unauthorised request");
    }
    else
    {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = "abchdff";
    const isUserAuthorised = token === "abchdff";
    if(!isUserAuthorised)
    {
        res.status(401).send("Unauthorised request");
    }
    else
    {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth
}