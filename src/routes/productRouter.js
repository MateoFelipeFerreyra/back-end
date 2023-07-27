import { Router } from "express";
import { manager } from '../managers/productManager'
const router = Router();

router.get('/', async (req, res) => {
    const limit = req.query.limit
    console.log(limit)
    res.send((await manager.getProducts()).slice(0, limit))
})

router.get('/:pid', async (req, res) => {
    try {
        const id = req.params.pid;
        const found = await manager.getElementById(parseInt(id))
        if (found) {
            res.json(found)
        }
        res.status(404).json({ status: 'error', error: 'Not found' })
    }catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const product = req.body;
        const result = await manager.addProduct(product)
        res.json({ status: 'success', payload: result })
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

router.put('/:pid', async (req, res) => {
    try {
        const id = req.params.pid
        const data = req.body
        const result = await manager.updateProduct(id, data)
        if (result == null) {
            return res.status(404), json({ status: 'error', error: 'Not found' })
        }
        const products = await manager.find(products)
        res.status(200).json({ status: 'success', payload: result })
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message })
    }
})

router.delete('/:pid', async (req, res) => {
    try {
        const id = req.params.pid
        const result = await manager.deleteProduct(id)
        if (result === null) {
            return res.status(404).json({ status: 'error', error: 'not found' })
        }
        res.json({ status: 'success', payload: result })
    }catch (err) {
        return res.status(500).json({ status: 'error', error: err.message })
    }
})

export default router