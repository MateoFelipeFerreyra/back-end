import express from 'express';
import __dirname from './utils.js';

import productRouter from "./routes/productRouter.js"
import cartRouter from "./routes/cartRouter.js"


const app = express();
const PORT = 8080;

// Middlewere
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)


app.listen(PORT, () =>{
    console.log(`Server run on port: ${PORT}`);
})
