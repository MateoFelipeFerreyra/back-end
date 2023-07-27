import fs from 'fs'

class cartManager{
    #format
    #path
    #error
    constructor(path) {
        this.#path = path
        if (!fs.existsSync(this.#path)) {
            fs.writeFileSync(this.#path, '[{"id":0}]')
        }
        this.#error
        this.#format = 'utf-8'
    }

    getCarts = async () => {
        return JSON.parse(await fs.promises.readFile(this.#path, this.#format))
    }

    getElementById = async (id) => {
        const carts = await this.getCarts()
        return carts.find(item => item.id === id)
    }



}


const manager = new cartManager('src/data/carrito.json')
export { manager }








