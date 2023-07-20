import { log } from 'console';
import express from 'express';
import {manager} from './managers/productManager.js'


const app = express();
const PORT = 8080;

app.get ('/', async (req, res) =>{
    const limit = req.query.limit
    console.log(limit)
    res.send((await manager.getProducts()).slice(0, limit))
})


app.get('/:userId', async (req,res) => {
    const userId = req.params.userId;
    const found = await manager.getElementById(parseInt(userId))
    if (found){
        res.json(found)
    }

    res.send({mensage: 'usuario no encontrado'})
    
})

app.listen(PORT, () =>{
    console.log(`Server run on port: ${PORT}`);
})
