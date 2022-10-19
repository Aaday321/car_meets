import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = new express();
const PORT = 4000;

//Mongo variable
const ATLAS_URL= "";
const COMPAS_URL = "";

// I should learn what this is
const ARG_2 = {
    useNewUrlParser: true,
    useUnfiedTopology: true
}

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(COMPAS_URL, ARG_2)

//bodyparser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS setup
app.use(cors());

//Server
const callBack = (req, res)=>{
    res.send(`SERVER ACTIVATION`)
}
const callBack2 = ()=>{
    console.log(`Server is running on port: ${PORT}`);
}

app.get('/', callBack)

app.listen(PORT, callBack2);

