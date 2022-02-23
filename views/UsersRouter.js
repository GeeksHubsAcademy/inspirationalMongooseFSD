const router = require("express").Router();

const UsersController = require('../controllers/UsersController');

//CRUD

//GET - Find all data of all clients

router.get("/", async(req, res) => {
    try {
        res.json(await UsersController.findAllUsers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


//POST

//Create User

router.post("/", async(req, res) => {
    try {
        const user = req.body;
        res.json(await UsersController.createUser(user));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

//Find by email

router.post('/email', async(req, res) => {
    try {
        let email = req.body.email;
        res.json(await UsersController.findByEmail(email));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

//PUT


//DELETE

router.delete("/", async(req, res) => {
    try {
        const body = req.body;
        res.json(await UsersController.removeUser(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;