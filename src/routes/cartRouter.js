import { Router } from "express";
import { manager } from '../managers/cartManager.js'


const router = Router();

router.post('/', (req, res) => {
    manager.addCart().then(result => res.send(result))
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    let cart = await manager.getElementById(parseInt(id))
    res.send(cart.products)
})

router.post('/:id',async (req, res) =>{
    const id = req.params.id;
    let cart = await manager.addProductCart(parseInt(id),req.body.product)
    res.send(cart)
})

export default router