const router = require("express").Router();

const OrdersController = require('../controllers/OrdersController');

//CRUD

//GET - Find all data of all clients

router.get("/", async(req, res) => {
    try {
        res.json(await OrdersController.allOrders());
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
        const order = req.body;
        res.json(await OrdersController.createOrder(order));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;