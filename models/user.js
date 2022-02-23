const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    posts: {
        type: Array
    }
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {//transform es un metodo de mongoose
           delete ret['password']//ret es un metodo encripta la password para enviarla con mas seguridad
           return ret
    }
}


userSchema.set('toJSON', toJSONConfig);

const User = mongoose.model("User", userSchema);
module.exports = User;