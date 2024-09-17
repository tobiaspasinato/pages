import express, { json } from "express";
import dotenv from "dotenv";
import { decirNombre } from "./func";

const app = express();
dotenv.config();
const PORT = process.env.PORT; // desencripta el .env
const PAPAFRITA = process.env.PAPAFRITA;

app.use(express.json()); //lee el json y hace que nodejs lo pueda leer

app.post("/post", (req, res) => {
    console.log(req.body.name);
    res.status(200).json({
        sucess:true,
        message:`${decirNombre(req.body.name)}`
    });
});

app.get("/get", (req, res) => {
    try {
        throw new Error("PAPAFRITA");
        
        res.status(200).json({
            sucess:true,
            message:"Hola soy pepe"
        })
    } catch (error) {
        console.log("ERROR", error);
        res.status(404).json({
            sucess:false,
            message:error
        })   
    }
});

app.listen(PORT, () => { //listen(puerto, () => {})
    console.log("El serv se inicio en ", PORT);
})

