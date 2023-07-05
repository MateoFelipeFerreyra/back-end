class ProductManager {

    constructor() {
        this.products = [];
    }

    addProduct(nombre, descripcion, precio, img, code, stock) {
        const found = this.products.find(item => item.code == code)
        if (found) {
            console.log("el codigo ya existe")
        }
        else {
            const id = this.products.length
            this.products.push({ id, nombre, descripcion, precio, img, code, stock })
        }
    }
}

const Manager = new ProductManager()
Manager.addProduct("lapicera", "pepe", 3, "url", "hola1232", 20)
Manager.addProduct("lapicera", "pepe", 3, "url", "chua1232", 20)

console.log(Manager.products)
