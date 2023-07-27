import express from 'express';
import __dirname from './utils.js';

import productRouter from "./routes/productRouter.js"


const app = express();
const PORT = 8080;

// Middlewere
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/products', productRouter)

app.listen(PORT, () =>{
    console.log(`Server run on port: ${PORT}`);
})
