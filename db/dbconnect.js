const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    
    const conn_str = "mongodb+srv://new_user_36:1pUu9uuXQqQiqGfK@dbhive.cu5o7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error in connection",err);
            } else {
                console.log("mongodb is connected");
        }});

    // mongoose.connect(uri, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    // }).then(() => {
    //         console.log('Conectado a la base de datos');
    // })
    // .catch(error => console.log('Error conectandose a la base de datos' + error));
    // ////////////////////////

}

module.exports = dbconnect;