import express from "express";
import viewEngine from"./config/viewEngines";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();

let app=express();

//config viewEngine
viewEngine(app);

//parse request to json
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//init Web Routes
initWebRoutes(app);

let port=process.env.PORT||8080;

app.listen(port, ()=>{
    console.log("chatbot dang chay o cong"+port);
});