const OrderModel = require('../models/order.js');

class Order {
    constructor(){

    }

    async createOrder(order) {
        
        return OrderModel.create(order);
    }

    async allOrders(){
        return OrderModel.find().populate('userId');
    }

    
}

let OrdersController = new Order();
module.exports = OrdersController;