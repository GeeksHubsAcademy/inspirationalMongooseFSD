const express=require('express');
const app=express();
const cors = require('cors');
const router = require('./router');
const port = 3000;

let corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS

app.use(router);

//db connection
const dbconnect = require('./db/dbconnect');

dbconnect();

app.listen(port, () => console.log(`Node server runing on http://localhost:${port}` ))


