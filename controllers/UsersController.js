const UserModel = require('../models/user.js');
const bcrypt = require("bcrypt");

class User {
    constructor(){

    }

    async createUser(user) {
        user.password = await bcrypt.hash( user.password, 10 );
        return UserModel.create(user);
    }

    async findAllUsers(){
        return UserModel.find();
    }

    async findByEmail(email){
        return UserModel.findOne(email)
    }

    async removeUser(){
        return UserModel.findByIdAndRemove( { _id: req._id } );
    }
}

let UsersController = new User();
module.exports = UsersController;