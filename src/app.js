import express from 'express';
import handlebars from "express-handlebars"
import __dirname from './utils.js';
import { Server, Socket } from 'socket.io'

import productRouter from "./routes/productRouter.js"
import cartRouter from "./routes/cartRouter.js"
import viewsRouter from "./routes/viewsRouter.js";


const app = express();
const PORT = 8080;

// Middlewere
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use("/", viewsRouter);


app.use(express.static(__dirname + '/public'))

// Confi de .hdb
app.engine("handlebars", handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


const serverHttp = app.listen(PORT, () =>{
    console.log(`Server run on port: ${PORT}`);
})

//Intacia socket.io
const io = new Server(serverHttp)

//Canal de comunicacion 
io.on('connection', async socket =>{
    
    const resultProducts = await fetch("http://localhost:8080/api/products")
            const dataProducts = await resultProducts.json()
            io.emit("updatedProducts", dataProducts.payload);
            socket.on("productList", async () => {
                const resultProducts = await fetch("http://localhost:8080/api/products")
                const dataProducts = await resultProducts.json()
                io.emit("updatedProducts", dataProducts.payload);
            });
})