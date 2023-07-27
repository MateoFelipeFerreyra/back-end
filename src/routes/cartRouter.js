import { Router } from "express";
import { manager } from '../managers/cartManager.js'


const router = Router();

router.post('/', (req, res) => {
    manager.addCart().then(result => res.send(result))
})

router.get('/:id/products', async (req, res) => {
    const id = req.params.id;
    let cart = await manager.getElementById(parseInt(id))
    let productsId = cart.products
    let cartProducts = []
    await Promise.all(productsId.map(async (products) => {
        let newProduct = await manager.getElementById(products)
        cartProducts.push(newProduct)
    }))
    res.send(cartProducts)
})



export default router