const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const orderSchema = new Schema({
    price: {
        type: Number,
        required: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    },
    date:{
        type: String,
        required: false
    },
});


const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']
           return ret
    }
}
orderSchema.set('toJSON', toJSONConfig);


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;