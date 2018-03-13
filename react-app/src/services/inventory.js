import Dexie from "dexie";

const db = new Dexie('ims');

db.version(1).stores({
    products: '++id, code, name, description, sales, price, photo'
})

export default class Inventory {
    find() {
        // Find all products
        return db.products.toArray()
    }
    addProduct(product) {
        return db.products.add(product)
    }
}
